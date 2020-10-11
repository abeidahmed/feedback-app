import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { handleLinkWrapping } from './utils';

function StyledButton({
  size = 'md',
  appearance = 'minimal',
  className,
  children,
  ...props
}) {
  const buttonClass = cn([
    'inline-flex items-center justify-center relative rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-600',
    {
      'px-3 py-2 leading-6 font-medium': size === 'md',
      'text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700':
        appearance === 'primary',
      'text-gray-700 border-gray-300 hover:text-gray-500 active:bg-gray-50':
        appearance === 'minimal',
    },
  ]);

  return (
    <button {...props} className={`${buttonClass} ${className}`}>
      {children}
    </button>
  );
}

StyledButton.propTypes = {
  size: PropTypes.oneOf(['md']),
  appearance: PropTypes.oneOf(['primary', 'minimal']),
};

export const Button = (props) => handleLinkWrapping(StyledButton, props);
