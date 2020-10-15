/** @jsx jsx */
import { useState, useRef, useEffect } from 'react';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { Icon } from 'components/Icon';
import { boxShadow, color } from 'global/theme';
import { IssueIcon, IdeaIcon } from './icon';

function Brand({ isActive, onClose }) {
  const [activeForm, setActiveForm] = useState(false);
  const [formTitle, setFormTitle] = useState("What's on your mind?");

  const textareaRef = useRef(null);

  useEffect(() => {
    textareaRef.current.focus();
  }, [activeForm]);

  function handleActiveTag(title) {
    setActiveForm(true);
    setFormTitle(title);
  }

  function handleBack() {
    setActiveForm(false);
    setFormTitle("What's on your mind?");
  }

  return (
    <Form isActive={isActive}>
      <Header>
        {activeForm ? (
          <IconButton type="button" onClick={handleBack}>
            <Icon icon="chevron-left" className="w-4 h-4 text-gray-500" />
          </IconButton>
        ) : (
          <span></span>
        )}
        <H4>{formTitle}</H4>
        <IconButton type="button" onClick={onClose}>
          <Icon icon="x" className="w-4 h-4 text-gray-500" />
        </IconButton>
      </Header>
      <Section>
        <ButtonWrapper isActive={!activeForm}>
          <ActionButton
            type="button"
            onClick={() => handleActiveTag('Report an issue')}
          >
            <IssueIcon />
            <span>Issue</span>
          </ActionButton>
          <ActionButton
            type="button"
            onClick={() => handleActiveTag('Share an idea')}
          >
            <IdeaIcon />
            <span>Idea</span>
          </ActionButton>
          <ActionButton
            type="button"
            onClick={() => handleActiveTag('Tell us anything!')}
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
          <Label htmlFor="feedback">Send in your feedback</Label>
          <Textarea
            ref={textareaRef}
            id="feedback"
            rows="2"
            placeholder="Type your feedback.."
          ></Textarea>
          <StyledButton>Send feedback</StyledButton>
        </FormContentWrapper>
      </Section>
      <Footer>
        Widget by <span>Feeder</span>
      </Footer>
    </Form>
  );
}

const Section = styled.section`
  padding: 12px 0;
`;

const FormContentWrapper = styled.div`
  display: ${(props) => (props.isActive ? 'block' : 'none')};
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
  display: ${(props) => (props.isActive ? 'flex' : 'none')};

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
  padding: 12px;
  margin-top: 16px;
  z-index: 99999;
  display: ${(props) => (props.isActive ? 'block' : 'none')};
`;

const Footer = styled.footer`
  font-size: 12px;
  color: ${color.gray500};
  text-align: center;

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
