import React from 'react';

const Glyph = ({ icon }) => {
  switch (icon) {
    case 'chevron-down':
      return (
        <g>
          <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeWidth="2" />
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
