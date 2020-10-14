import React from 'react';

function LanguageIcon({ ...props }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" {...props}>
      <rect opacity="0.12" width="64" height="64" rx="32" fill="#22DB69"></rect>
      <path
        d="M32 15.698a16.302 16.302 0 100 32.604v-8.553a7.75 7.75 0 010-15.498v-8.553z"
        fill="#23BF5F"
      ></path>
      <path
        opacity="0.6"
        d="M32 48.302a16.302 16.302 0 000-32.604v32.604z"
        fill="#22DB69"
      ></path>
    </svg>
  );
}

export default LanguageIcon;
