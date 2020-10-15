import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { useCurrentUser } from 'store/currentUser';
import { color } from 'global/theme';
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
    <nav className="items-center hidden space-x-4 md:flex md:space-x-8">
      <FormWrapper>
        <StyledButton
          className="text-gray-600 hover:text-gray-900"
          onClick={() => setFeedbackActive(!feedbackActive)}
        >
          Give your feedback
        </StyledButton>
        <FeedbackWrapper>
          <BrandFeedbackForm
            isActive={feedbackActive}
            onClose={closeFeedbackForm}
          />
        </FeedbackWrapper>
      </FormWrapper>
      <StyledLink to="/" className="text-gray-600 hover:text-gray-900">
        Help
      </StyledLink>
      <StyledButton
        className="text-gray-600 hover:text-gray-900"
        onClick={handleLogout}
      >
        Logout
      </StyledButton>
    </nav>
  );
}

const FormWrapper = styled.div`
  position: relative;
`;

const FeedbackWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const button = css`
  color: ${color.gray600};

  &:hover {
    color: ${color.gray900};
  }
`;

const StyledButton = styled.button`
  ${button}
`;

const StyledLink = styled(Link)`
  ${button};
`;

export default DesktopMenu;
