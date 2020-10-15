/** @jsx jsx */
import { useState, useRef, useEffect } from 'react';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';
import { useMutation } from 'react-query';
import { useCurrentUser } from 'store/currentUser';
import { Icon } from 'components/Icon';
import { postFeedbackApi } from 'api/postFeedback';
import { boxShadow, color } from 'global/theme';
import { IssueIcon, IdeaIcon } from './icon';
import { types, tagTypes } from './types';
import * as c from './constants';

function Brand({ isActive, onClose }) {
  const [activeForm, setActiveForm] = useState(types.initial);
  const [formTitle, setFormTitle] = useState(c.INITIAL_TITLE);
  const [activeTag, setActiveTag] = useState('');
  const [content, setContent] = useState('');

  const location = useLocation();
  const { currentUser } = useCurrentUser();
  const [mutate, { isLoading }] = useMutation(postFeedbackApi, {
    onSuccess: () => {
      setContent('');
      setActiveForm(types.success);
    },
  });

  async function handleSubmit(e) {
    e.preventDefault();
    await mutate({
      projectId: c.PROJECT_ID,
      content,
      currentUserEmail: currentUser.email || c.DEFAULT_EMAIL,
      pageUrl: location.pathname,
      device: '',
      tag: activeTag,
    });
  }

  const textareaRef = useRef(null);

  useEffect(() => {
    textareaRef.current.focus();
  }, [activeForm]);

  function handleActiveTag(title, tagName) {
    setActiveForm(types.feedback);
    setFormTitle(title);
    setActiveTag(tagName);
  }

  function handleBack() {
    setActiveForm(types.initial);
    setFormTitle(c.INITIAL_TITLE);
  }

  return (
    <Form onSubmit={handleSubmit} isActive={isActive}>
      <Header>
        {activeForm === types.feedback ? (
          <IconButton type="button" onClick={handleBack}>
            <Icon icon="arrow-left" className="w-4 h-4 text-gray-500" />
          </IconButton>
        ) : (
          <span></span>
        )}
        {activeForm !== types.success && <H4>{formTitle}</H4>}
        <IconButton type="button" onClick={onClose}>
          <Icon icon="x" className="w-4 h-4 text-gray-500" />
        </IconButton>
      </Header>
      <Section>
        <ButtonWrapper isActive={activeForm}>
          <ActionButton
            type="button"
            onClick={() => handleActiveTag(c.ISSUE_TITLE, tagTypes.issue)}
          >
            <IssueIcon />
            <span>Issue</span>
          </ActionButton>
          <ActionButton
            type="button"
            onClick={() => handleActiveTag(c.IDEA_TITLE, tagTypes.idea)}
          >
            <IdeaIcon />
            <span>Idea</span>
          </ActionButton>
          <ActionButton
            type="button"
            onClick={() => handleActiveTag(c.OTHER_TITLE, tagTypes.other)}
          >
            <Icon
              icon="dots-horizontal"
              width="48"
              height="48"
              css={css`
                margin: 0 auto;
              `}
            />
            <span>Other</span>
          </ActionButton>
        </ButtonWrapper>
        <FormContentWrapper isActive={activeForm}>
          <div>
            <Label htmlFor="feedback">Send in your feedback</Label>
            <Textarea
              ref={textareaRef}
              id="feedback"
              rows="3"
              placeholder="Share your feedback.."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></Textarea>
          </div>
          <StyledButton disabled={isLoading || !content.length}>
            Send feedback
          </StyledButton>
        </FormContentWrapper>
        <SuccessWrapper isActive={activeForm}>
          <div>
            <div>
              <Icon icon="check" width="24" height="24" />
            </div>
            <h4>Thank you for your feedback!</h4>
            <button onClick={() => setActiveForm(types.initial)}>
              Submit more feedback
            </button>
          </div>
        </SuccessWrapper>
      </Section>
      <Footer>
        Widget by <span>Feeder</span>
      </Footer>
    </Form>
  );
}

const Section = styled.section`
  padding: 12px 0;
  height: 130.8px;
`;

const SuccessWrapper = styled.div`
  display: ${(props) => (props.isActive === types.success ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  text-align: center;

  > div {
    h4 {
      font-size: 18px;
      font-weight: 700;
      margin-top: 12px;
    }

    div {
      border-radius: 50%;
      background-color: ${color.green400};
      width: 40px;
      height: 40px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    svg {
      margin: 0 auto;
      color: #fff;
    }
  }

  button {
    margin-top: 6px;
    font-size: 12px;
    border-radius: 6px;
    padding: 0 8px;
    line-height: 20px;
    color: ${color.gray500};
    background-color: ${color.gray100};
    border: 1px solid transparent;

    &:hover {
      color: ${color.gray800};
    }

    &:focus {
      outline: none;
      border-color: ${color.gray700};
    }
  }
`;

const FormContentWrapper = styled.div`
  display: ${(props) => (props.isActive === types.feedback ? 'block' : 'none')};

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const Label = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

const Textarea = styled.textarea`
  border: 1px solid ${color.gray200};
  resize: none;
  border-radius: 6px;
  width: 100%;
  display: block;
  padding: 8px;
  font-size: 14px;
  font-weight: 500;
  flex: 1;

  &:focus {
    outline: none;
    border-color: ${color.blue600};
    box-shadow: ${boxShadow.outline};
  }
`;

const StyledButton = styled.button`
  display: block;
  width: 100%;
  border-radius: 6px;
  color: #fff;
  background-color: ${color.blue500};
  margin-top: 6px;
  font-size: 14px;
  font-weight: 500;
  padding: 4px;

  &:hover {
    background-color: ${color.blue600};
  }

  &:focus {
    outline: none;
    box-shadow: ${boxShadow.outline};
    border-color: ${color.blue600};
  }
`;

const ButtonWrapper = styled.div`
  display: ${(props) => (props.isActive === types.initial ? 'flex' : 'none')};

  > * + * {
    margin-left: 12px;
  }
`;

const ActionButton = styled.button`
  width: 100%;
  background-color: ${color.gray50};
  border-radius: 6px;
  padding: 16px;
  border: 1px solid transparent;

  > span {
    color: ${color.gray600};
    font-weight: 500;
    font-size: 14px;
    margin-top: 4px;
    display: block;
  }

  &:focus {
    outline: none;
    border-color: ${color.blue600};
    box-shadow: ${boxShadow.outline};
  }

  &:hover {
    background-color: ${color.gray100};
  }
`;

const Form = styled.form`
  width: 320px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: ${boxShadow.lg};
  padding: 12px 12px 0 12px;
  margin-top: 16px;
  z-index: 99999;
  display: ${(props) => (props.isActive ? 'block' : 'none')};
`;

const Footer = styled.footer`
  font-size: 10px;
  color: ${color.gray500};
  text-align: center;
  padding: 4px 0;

  > span {
    font-weight: 500;
    color: ${color.gray700};
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > span {
    width: 16px;
    margin-left: 6px;
  }
`;

const H4 = styled.h4`
  font-size: 18px;
  font-weight: 700;
`;

const IconButton = styled.button`
  padding: 2px;
  border-radius: 4px;
  border: 1px solid transparent;

  &:focus {
    outline: none;
    box-shadow: ${boxShadow.outline};
    border-color: ${color.blue600};
  }
`;

export default Brand;
