import React from 'react';
import { Global, css } from '@emotion/core';
import { color } from './color';

function GlobalStyle() {
  return (
    <Global
      styles={css`
        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          min-height: 100vh;
          color: ${color.gray900};
          background-color: #fff;
        }

        button:disabled,
        button[disabled] {
          opacity: 0.5;
          cursor: default;
          pointer-events: none;
        }

        button,
        a,
        input,
        input[type='radio'],
        input[type='submit'],
        input[type='checkbox'] {
          transition: all 150ms ease-in-out;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: 'PT Serif';
        }
      `}
    />
  );
}

export default GlobalStyle;
