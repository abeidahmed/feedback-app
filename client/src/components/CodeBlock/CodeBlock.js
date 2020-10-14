import React, { useEffect } from 'react';
import Prism from 'prismjs';
import styled from '@emotion/styled';
import { color, media } from 'global/theme';

function CodeBlock({ lang, code }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <Pre>
      <code className={`language-${lang}`}>{code}</code>
    </Pre>
  );
}

const Pre = styled.pre`
  padding: 16px;
  font-size: 14px;
  color: ${color.gray700};
  border-radius: 6px;

  ${media.md`
    font-size: 16px;
  `}
`;

export default CodeBlock;
