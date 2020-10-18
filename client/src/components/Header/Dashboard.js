/** @jsx jsx */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { useGetProjects } from 'api/allProjects';
import { media, color } from 'global/theme';
import { Logo } from 'assets/svg';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';
import { TagSelector } from 'components/Dropdown';
import { IconButton } from 'components/Button';
import { Container } from 'components/Container';

function Dashboard() {
  const [isActive, setIsActive] = useState(false);

  const { projects, isLoading, isError } = useGetProjects();

  return (
    <header
      css={{
        position: 'relative',
        backgroundColor: '#fff',
      }}
    >
      <Overlay isActive={isActive}>
        <div />
      </Overlay>
      <Container
        css={{
          position: 'relative',
          zIndex: 10,
          backgroundColor: '#fff',
        }}
      >
        <HeadWrapper>
          <div
            css={{
              display: 'flex',
              alignItems: 'center',
              flex: 1,
            }}
          >
            <Link to="/app">
              <Logo width="48" height="48" />
            </Link>
            {isLoading || isError ? null : <TagSelector projects={projects} />}
          </div>
          <DesktopMenu />
          <MenuButton>
            <IconButton
              icon={`${isActive ? 'chevron-up' : 'chevron-down'}`}
              appearance="minimal"
              onClick={() => setIsActive(!isActive)}
            />
          </MenuButton>
        </HeadWrapper>
      </Container>
      <MobileMenu isActive={isActive} />
    </header>
  );
}

const MenuButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 12px;
  margin-right: -6px;

  ${media.md`
    display: none;
  `}
`;

const HeadWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  border-bottom: 1px solid ${color.gray200};
`;

const inset = css`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Overlay = styled.div`
  position: fixed;
  ${inset};
  z-index: 10;
  display: ${(props) => !props.isActive && 'none'};

  ${media.md`
    display: none;
  `}

  > div {
    position: absolute;
    ${inset};
    background-color: ${color.gray300};
    opacity: 0.75;
  }
`;

export default Dashboard;
