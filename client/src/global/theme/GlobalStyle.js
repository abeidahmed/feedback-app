import React from 'react';
import { Global, css } from '@emotion/core';

function GlobalStyle() {
  return (
    <Global
      styles={css`
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
