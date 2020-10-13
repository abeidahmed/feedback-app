import React from 'react';
import PropTypes from 'prop-types';

function BoxTop({ title, children }) {
  return (
    <div className="p-4 md:px-5">
      <h2 className="text-lg font-bold text-gray-700 md:text-xl">{title}</h2>
      <div className="mt-3">{children}</div>
    </div>
  );
}

BoxTop.propTypes = {
  title: PropTypes.string.isRequired,
};

export default BoxTop;
