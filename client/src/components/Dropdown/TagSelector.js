import React, { useState, useEffect } from 'react';
import { useLocation, Redirect, Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { useModalType } from 'store/modal';
import { boxShadow, color, maxWidth, media, truncate } from 'global/theme';
import { Icon } from 'components/Icon';
import OutsideClickHandler from 'react-outside-click-handler';

function TagSelector({ projects }) {
  const location = useLocation();
  const paramId = location.pathname.split('/')[2];
  const { name, id } = projects.find((project) => project.id === paramId) || {};
  const { modalOn, types } = useModalType();

  const [isActive, setIsActive] = useState(false);
  const [title, setTitle] = useState('');

  useEffect(() => {
    setTitle(name);
  }, [id, name]);

  function handleAddProject() {
    modalOn({
      modalType: types.ADD_PROJECT,
      modalProps: {},
    });
    setIsActive(false);
  }

  if (location.pathname === '/app/')
    return <Redirect to={{ pathname: '/app' }} />;
  if (location.pathname === '/app') return null;

  return (
    <DropdownWrapper>
      <OutsideClickHandler onOutsideClick={() => setIsActive(false)}>
        <div>
          <StyledButton onClick={() => setIsActive(!isActive)}>
            <span>{title}</span>
            <Icon icon="selector" />
          </StyledButton>
        </div>
        <ListWrapper isActive={isActive}>
          <ul>
            {projects.map(({ id, name }) => (
              <StyledLink
                key={id}
                to={`/app/${id}`}
                onClick={() => setIsActive(false)}
              >
                {name}
              </StyledLink>
            ))}
            <hr />
            <StyledListButton onClick={handleAddProject}>
              New Project
              <Icon icon="plus" />
            </StyledListButton>
          </ul>
        </ListWrapper>
      </OutsideClickHandler>
    </DropdownWrapper>
  );
}

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-shadow: ${boxShadow.default};
  background-color: ${color.gray50};
  padding: 6px 12px;
  border: 1px solid transparent;
  border-radius: 6px;

  > span {
    ${truncate};
    width: 0;
    flex: 1;
    text-align: left;
    padding-right: 4px;
  }

  > svg {
    width: 20px;
    height: 20px;
    color: ${color.gray600};
    margin-right: -4px;
  }

  &:hover {
    background-color: ${color.gray100};
  }

  &:focus {
    border-color: ${color.blue600};
    outline: none;
    box-shadow: ${boxShadow.outline};
  }
`;

const StyledListButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 8px 12px;
  text-align: left;
  color: ${color.gray700};

  > svg {
    height: 20px;
    width: 20px;
    color: ${color.gray400};
  }

  &:hover {
    background-color: ${color.gray100};
  }

  &:focus {
    background-color: ${color.gray100};
    outline: none;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  padding: 8px 12px;
  color: ${color.gray700};

  &:hover {
    background-color: ${color.gray100};
  }

  &:focus {
    background-color: ${color.gray100};
    outline: none;
  }
`;

const DropdownWrapper = styled.div`
  position: relative;
  flex: 1;
  max-width: ${maxWidth.sm};
  width: 100%;
  margin-left: 12px;

  ${media.md`
    margin-left: 16px;
  `}
`;

const ListWrapper = styled.div`
  position: absolute;
  width: 100%;
  margin-top: 8px;
  overflow: hidden;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: ${boxShadow.md};
  display: ${(props) => !props.isActive && 'none'};

  > ul {
    width: 100%;
    padding: 4px 0;

    > hr {
      margin: 4px 0;
      border-color: ${color.gray200};
    }
  }
`;

export default TagSelector;
