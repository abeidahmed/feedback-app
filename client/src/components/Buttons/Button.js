import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { handleLinkWrapping } from './utils';
import { boxShadow, color } from 'global/theme';

const SytledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: ${color.gray700};
  white-space: nowrap;
  position: relative;
  border-radius: 6px;
  border: 1px solid transparent;
  line-height: 20px;
  box-shadow: ${boxShadow.sm};
  font-weight: 500;
  padding: 8px 16px;
  text-align: center;
  width: ${(props) => props.width || 'auto'};

  &:focus {
    outline: none;
  }

  ${(props) => !props.color && defaultCls}
  ${(props) => props.color === 'primary' && primaryCls}
  ${(props) => props.color === 'danger' && dangerCls}

  ${(props) =>
    props.color === 'danger' &&
    props.appearance === 'minimal' &&
    dangerMinimalCls}

  ${(props) =>
    props.color === 'primary' &&
    props.appearance === 'minimal' &&
    primaryMinimalCls}

  ${(props) =>
    !props.color && props.appearance === 'minimal' && defaultMinimalCls}
`;

/** Color classes */
const defaultCls = css`
  border-color: ${color.gray300};
  background-color: #fff;

  &:hover {
    color: ${color.gray500};
  }

  &:focus {
    border-color: ${color.blue700};
    box-shadow: ${boxShadow.outline};
  }
`;

const primaryCls = css`
  color: #fff;
  background-color: ${color.blue500};

  &:hover {
    background-color: ${color.blue600};
  }

  &:focus {
    border-color: ${color.blue700};
    box-shadow: ${boxShadow.outline};
  }
`;

const dangerCls = css`
  color: #fff;
  background-color: ${color.red600};

  &:hover {
    background-color: ${color.red500};
  }

  &:focus {
    border-color: ${color.red700};
    box-shadow: ${boxShadow.outlineRed};
  }
`;

/** Minimal classes */
const defaultMinimalCls = css`
  background-color: ${color.gray100};
  color: ${color.gray700};
  border-color: transparent;

  &:hover {
    color: ${color.gray500};
    background-color: ${color.gray100};
  }

  &:active {
    background-color: ${color.gray200};
  }
`;

const primaryMinimalCls = css`
  background-color: ${color.blue100};
  color: ${color.blue700};

  &:hover {
    color: ${color.blue500};
    background-color: ${color.blue100};
  }

  &:active {
    background-color: ${color.blue200};
  }
`;

const dangerMinimalCls = css`
  background-color: ${color.red100};
  color: ${color.red700};

  &:hover {
    color: ${color.red500};
    background-color: ${color.red100};
  }

  &:active {
    background-color: ${color.red200};
  }
`;

export const Button = (props) => handleLinkWrapping(SytledButton, props);
