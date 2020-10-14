import React from 'react';

function TeamIcon({ ...props }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" {...props}>
      <rect opacity="0.12" width="64" height="64" rx="32" fill="#F03B3B"></rect>
      <path
        opacity="0.68"
        d="M44.862 34.82A8.445 8.445 0 1032.92 22.878L20.126 35.67 32.07 47.614 44.862 34.82z"
        fill="#F56565"
      ></path>
      <path
        d="M19.255 34.82a8.445 8.445 0 1111.943-11.943L43.991 35.67 32.048 47.614 19.255 34.82z"
        fill="#F54E4E"
      ></path>
    </svg>
  );
}

export default TeamIcon;
