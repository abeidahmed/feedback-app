import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { ErrorMessage } from './components';

function Input({
  label,
  to,
  error,
  errorType,
  showLabel = true,
  id,
  appearance,
  ...props
}) {
  let pathname, title;
  if (to) {
    pathname = to.pathname;
    title = to.title;
  }

  const labelClass = cn([
    'block text-sm font-medium text-gray-700',
    {
      'sr-only': !showLabel,
    },
  ]);

  const inputClass = cn([
    'block w-full sm:text-sm form-input focus:border-blue-600 focus:shadow-outline-blue shadow-sm',
    {
      'bg-gray-100 focus:bg-white': appearance === 'gray',
      'mt-1': showLabel,
    },
  ]);

  return (
    <div>
      <div className="flex items-center justify-between">
        <label htmlFor={id} className={labelClass}>
          {label}
        </label>
        {to && (
          <Link
            to={pathname}
            className="text-sm font-medium text-blue-600 hover:text-blue-500"
          >
            {title}
          </Link>
        )}
      </div>
      <input id={id} className={inputClass} {...props} />
      <ErrorMessage error={error} errorType={errorType} />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.exact({
    pathname: PropTypes.string,
    title: PropTypes.string,
  }),
  error: PropTypes.array,
  errorType: PropTypes.string,
  showLabel: PropTypes.bool,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  appearance: PropTypes.oneOf(['gray']),
};

export default Input;
