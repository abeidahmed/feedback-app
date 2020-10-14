import React from 'react';

function UserIcon({ ...props }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" {...props}>
      <rect
        width="64"
        height="64"
        rx="32"
        fill="#A6C6FF"
        fillOpacity="0.27"
      ></rect>
      <circle cx="32" cy="24.755" r="6.642" fill="#005DFF"></circle>
      <path
        opacity="0.45"
        d="M44.68 44.075a12.68 12.68 0 00-25.36 0h25.36z"
        fill="#005DFF"
      ></path>
    </svg>
  );
}

export default UserIcon;
