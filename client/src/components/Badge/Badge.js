import React from 'react';
import PropTypes from 'prop-types';

function Badge({ tag, ...props }) {
  const { name, bgColor, textColor } = tag;

  return (
    <span
      className="block px-3 text-sm py-0.5 leading-5 rounded-full"
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
