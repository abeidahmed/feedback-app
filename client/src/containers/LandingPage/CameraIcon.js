import React from 'react';

function CameraIcon({ ...props }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" {...props}>
      <rect width="64" height="64" rx="32" fill="#FF6A00" opacity="0.2"></rect>
      <path
        d="M16 24.907a3 3 0 013-3h4.7a3 3 0 002.36-1.148l.478-.61A3 3 0 0128.898 19h6.203a3 3 0 012.36 1.148l.48.61a3 3 0 002.36 1.149H45a3 3 0 013 3V41a3 3 0 01-3 3H19a3 3 0 01-3-3V24.907z"
        fill="#FF6A00"
      ></path>
      <circle opacity="0.87" cx="32" cy="33.207" r="6.642" fill="#fff"></circle>
    </svg>
  );
}

export default CameraIcon;
