import React from 'react';
import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  display: inline-block;
  width: 40px;
  height: 40px;

  &:after {
    content: ' ';
    display: block;
    width: 40px;
    height: 40px;
    margin: 8px;
    border-radius: 50%;
    border: 4px solid rgb(0, 93, 255);
    border-color: rgb(0, 93, 255) transparent rgb(0, 93, 255) transparent;
    animation: ${spin} 1.2s linear infinite;
  }
`;

function Spinner({ ...props }) {
  return <StyledSpinner {...props}></StyledSpinner>;
}

export default Spinner;
