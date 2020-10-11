import React from 'react';

function Logo({ ...props }) {
  return (
    <svg viewBox="0 0 90 60" fill="none" {...props}>
      <circle transform="matrix(-1 0 0 1 60 30)" fill="#B8D2FF" r="30"></circle>
      <path
        d="M60 60c-16.418 0-29.806-13.301-29.806-29.709H90C90 46.7 76.612 60 60 60z"
        fill="#005DFF"
      ></path>
      <path
        d="M30 30c0 16.568-13.325 30-30 30V0c16.675 0 30 13.431 30 30z"
        fill="#FF6A00"
      ></path>
    </svg>
  );
}

export default Logo;
