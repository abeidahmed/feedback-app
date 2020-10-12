import React from 'react';

const Glyph = ({ icon }) => {
  switch (icon) {
    case 'chevron-down':
      return (
        <g>
          <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeWidth="2" />
        </g>
      );
    case 'cog':
      return (
        <g>
          <path
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            strokeLinecap="round"
            strokeWidth="2"
          />
          <path
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            strokeLinecap="round"
            strokeWidth="2"
          />
        </g>
      );
    case 'plus':
      return (
        <g>
          <path
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            strokeLinecap="round"
            strokeWidth="2"
          />
        </g>
      );
    case 'selector':
      return (
        <g>
          <path
            d="M8 9l4-4 4 4m0 6l-4 4-4-4"
            strokeLinecap="round"
            strokeWidth="2"
          />
        </g>
      );
    case 'x':
      return (
        <g>
          <path
            d="M6 18L18 6M6 6l12 12"
            strokeLinecap="round"
            strokeWidth="2"
          />
        </g>
      );
    default:
      return null;
  }
};

export function Icon({ icon, ...props }) {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <Glyph icon={icon} />
    </svg>
  );
}
