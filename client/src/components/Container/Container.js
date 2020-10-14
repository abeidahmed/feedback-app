import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

function Container({ size = 'sm', children, className, ...props }) {
  const wrapperClass = cn([
    'w-full px-4 mx-auto sm:px-6 lg:px-8',
    {
      'max-w-5xl': size === 'sm',
      'max-w-7xl': size === 'md',
    },
  ]);

  return (
    <div className={`${wrapperClass} ${className}`} {...props}>
      {children}
    </div>
  );
}

Container.propTypes = {
  size: PropTypes.oneOf(['sm', 'md']),
};

export default Container;
