import React from 'react';
import PropTypes from 'prop-types';

function Badge({ tag, ...props }) {
  const { name } = tag;

  return (
    <span
      className="block px-3 text-sm py-0.5 leading-5 text-red-700 bg-red-100 rounded-full"
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
