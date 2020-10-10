import { css } from 'styled-components';

const sizes = {
  xl: 1170,
  lg: 992,
  md: 768,
  sm: 576,
};

export const breakpoint = Object.keys(sizes).reduce((accumulator, label) => {
  const remSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (min-width: ${remSize}rem) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});
