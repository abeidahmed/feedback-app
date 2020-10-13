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
    'inline-flex items-center justify-center relative rounded-md focus:outline-none border border-transparent shadow-sm focus:shadow-outline-blue focus:border-blue-600',
    {
      'px-3 py-1 leading-6 text-sm': size === 'xs',
      'px-3 py-2 leading-5 font-medium text-sm': size === 'sm',
      'px-3 py-2 leading-6 font-medium': size === 'md',
      'text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700':
        appearance === 'primary',
      'text-red-700 bg-red-100 hover:text-red-500 active:bg-red-200':
        appearance === 'danger',
      'text-gray-700 bg-white border-gray-300 hover:text-gray-500 active:bg-gray-50':
        appearance === 'minimal',
      'text-gray-800 bg-gray-100 hover:text-gray-500': appearance === 'gray',
      'text-blue-700 bg-blue-100 hover:text-blue-500': appearance === 'blue',
    },
  ]);

  return (
    <button {...props} className={`${buttonClass} ${className}`}>
      {children}
    </button>
  );
}

StyledButton.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'md']),
  appearance: PropTypes.oneOf(['primary', 'minimal', 'gray', 'blue', 'danger']),
};

export const Button = (props) => handleLinkWrapping(StyledButton, props);
