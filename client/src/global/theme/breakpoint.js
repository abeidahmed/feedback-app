import { css } from '@emotion/core';

const breakpointValue = {
  xl: 1280,
  lg: 1024,
  md: 768,
  sm: 640,
};

export const media = Object.keys(breakpointValue).reduce((acc, label) => {
  const remSize = breakpointValue[label] / 16;
  acc[label] = (...args) => css`
    @media (min-width: ${remSize}rem) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
