import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import OutsideClickHandler from 'react-outside-click-handler';
import { useCurrentUser } from 'store/currentUser';
import { color, media, boxShadow } from 'global/theme';
import { BrandFeedbackForm } from 'components/FeedbackForm';

function MobileMenu({ isActive }) {
  const [feedbackActive, setFeedbackActive] = useState(false);
  const { logout } = useCurrentUser();
  const history = useHistory();

  function handleLogout() {
    logout();
    history.push('/');
  }

  function closeFeedbackForm() {
    setFeedbackActive(false);
  }

  return (
    <Nav isActive={isActive}>
      <ul>
        <OutsideClickHandler onOutsideClick={closeFeedbackForm}>
          <WidgetWrapper>
            <NavButton onClick={() => setFeedbackActive(!feedbackActive)}>
              Give your feedback
            </NavButton>
            <FeedbackWrapper>
              <BrandFeedbackForm
                isActive={feedbackActive}
                onClose={closeFeedbackForm}
              />
            </FeedbackWrapper>
          </WidgetWrapper>
        </OutsideClickHandler>
        <NavButton onClick={handleLogout}>Logout</NavButton>
      </ul>
    </Nav>
  );
}

const Nav = styled.nav`
  position: absolute;
  width: 100%;
  background-color: #fff;
  box-shadow: ${boxShadow.default};
  z-index: 100;
  display: ${(props) => (props.isActive ? 'block' : 'none')};

  ${media.md`
    display: none;
  `}

  > ul {
    width: 100%;
    padding: 8px 0;
  }
`;

const WidgetWrapper = styled.div`
  position: relative;
`;

const FeedbackWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const NavButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px 16px;
  text-align: left;

  &:focus {
    outline: none;
    background-color: ${color.gray100};
  }
`;

export default MobileMenu;
