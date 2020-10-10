import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  blockquote,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  figure,
  p,
  pre {
    margin: 0;
  }

  body {
    padding: 0;
    margin: 0;
    min-height: 100vh;
    color: ${({ theme }) => theme.color.gray900}
  }

  button {
    background-color: transparent;
    background-image: none;
  }

  button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
  }

  fieldset {
    margin: 0;
    padding: 0;
  }

  ol,
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  html {
    font-family: 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI',
      'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif',
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    line-height: 1.5;
    height: 100%;
  }

  *,
  ::before,
  ::after {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: var(--gray-300);
  }

  hr {
    border-top-width: 1px;
  }

  img {
    border-style: solid;
  }

  textarea {
    resize: vertical;
  }

  input::placeholder,
  textarea::placeholder {
    color: #a0aec0;
  }

  button,
  [role='button'] {
    cursor: pointer;
  }

  table {
    border-collapse: collapse;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
    font-family: 'PT Serif', 'system-ui'
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    padding: 0;
    line-height: inherit;
    color: inherit;
  }

  pre,
  code,
  kbd,
  samp {
    font-family: 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas',
      'Liberation Mono', 'Courier New', 'monospace';
  }

  img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
    display: block;
  }

  img,
  video {
    max-width: 100%;
    height: auto;
  }
`;
