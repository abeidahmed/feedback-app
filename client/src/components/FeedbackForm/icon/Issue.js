import React from 'react';

export default function Issue() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      fill="none"
      viewBox="0 0 48 48"
      style={{ margin: '0 auto' }}
    >
      <g>
        <path
          fill="#FFBC11"
          d="M20.913 4.405c1.16-1.975 4.014-1.975 5.174 0L46.394 38.98c1.174 2-.268 4.519-2.587 4.519H3.193c-2.319 0-3.761-2.52-2.587-4.52L20.913 4.406z"
        ></path>
        <path
          stroke="#000"
          strokeOpacity="0.05"
          d="M25.656 4.658l20.306 34.576C46.942 40.9 45.74 43 43.807 43H3.193c-1.932 0-3.134-2.1-2.155-3.766L21.344 4.658c.967-1.645 3.345-1.645 4.312 0z"
        ></path>
        <circle cx="23.5" cy="36.5" r="2.5" fill="#591515"></circle>
        <path
          fill="#591515"
          d="M25.844 16.495l-.75 12.008a1.597 1.597 0 01-3.188 0l-.75-12.008a2.349 2.349 0 114.688 0z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0H48V48H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}
