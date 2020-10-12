import React from 'react';
import PropTypes from 'prop-types';

function Badge({ tag, ...props }) {
  const { name, bgColor, textColor } = tag;

  return (
    <span
      className="block px-2 py-1.5 text-sm font-medium leading-3 rounded-full"
      style={{ backgroundColor: bgColor, color: textColor }}
      {...props}
    >
      {name}
    </span>
  );
}

Badge.propTypes = {
  tag: PropTypes.object,
};

export default Badge;
