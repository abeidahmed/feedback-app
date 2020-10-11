import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { handleLinkWrapping } from './utils';

function StyledIconButton({
  size = 'md',
  appearance = 'minimal',
  className,
  children,
  ...props
}) {
  const buttonClass = cn([
    'rounded-md focus:outline-none focus:shadow-outline-blue',
    {
      'p-1.5': size === 'md',
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
  size: PropTypes.oneOf(['md']),
  appearance: PropTypes.oneOf(['minimal']),
};

export const IconButton = (props) =>
  handleLinkWrapping(StyledIconButton, props);
