import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import OutsideClickHandler from 'react-outside-click-handler';
import { useCurrentUser } from 'store/currentUser';
import { color, media } from 'global/theme';
import { BrandFeedbackForm } from 'components/FeedbackForm';

function DesktopMenu() {
  const [feedbackActive, setFeedbackActive] = useState(false);
  const history = useHistory();
  const { logout } = useCurrentUser();

  function handleLogout() {
    logout();
    history.push('/');
  }

  function closeFeedbackForm() {
    setFeedbackActive(false);
  }

  return (
    <Nav>
      <FormWrapper>
        <OutsideClickHandler onOutsideClick={closeFeedbackForm}>
          <StyledButton onClick={() => setFeedbackActive(!feedbackActive)}>
            Give your feedback
          </StyledButton>
          <FeedbackWrapper>
            <BrandFeedbackForm
              isActive={feedbackActive}
              onClose={closeFeedbackForm}
            />
          </FeedbackWrapper>
        </OutsideClickHandler>
      </FormWrapper>
      <StyledButton onClick={handleLogout}>Logout</StyledButton>
    </Nav>
  );
}

const Nav = styled.nav`
  display: none;
  > * + * {
    margin-left: 16px;
  }

  ${media.md`
    display: flex;
    align-items: center;
    > * + * {
      margin-left: 32px;
    }
  `}
`;

const FormWrapper = styled.div`
  position: relative;
`;

const FeedbackWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const StyledButton = styled.button`
  color: ${color.gray600};

  &:hover {
    color: ${color.gray900};
  }
`;

export default DesktopMenu;
