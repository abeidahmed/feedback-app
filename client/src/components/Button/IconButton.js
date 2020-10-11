import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { handleLinkWrapping } from './utils';

function StyledIconButton({
  size = 'sm',
  appearance = 'minimal',
  className,
  children,
  ...props
}) {
  const buttonClass = cn([
    'rounded-md focus:outline-none focus:shadow-outline-blue border border-transparent focus:border-blue-600',
    {
      'h-xs p-1.5': size === 'xs',
      'h-sm p-2': size === 'sm',
      'bg-blue-500 hover:bg-blue-600': appearance === 'primary',
      'border-gray-300 hover:bg-gray-100 text-gray-500': appearance === 'white',
      'focus:bg-gray-50 bg-transparent': appearance === 'minimal',
    },
  ]);

  return (
    <button {...props} className={`${buttonClass} ${className}`}>
      {children}
    </button>
  );
}

StyledIconButton.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm']),
  appearance: PropTypes.oneOf(['primary', 'white', 'minimal']),
};

export const IconButton = (props) =>
  handleLinkWrapping(StyledIconButton, props);
