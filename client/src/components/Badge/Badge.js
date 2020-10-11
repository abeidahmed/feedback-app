import React from 'react';
import PropTypes from 'prop-types';

function Badge({ title, ...props }) {
  return (
    <span
      className="block px-3 text-sm py-0.5 leading-5 text-red-700 bg-red-100 rounded-full"
      {...props}
    >
      {title}
    </span>
  );
}

Badge.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Badge;
