import React from 'react';
import { findError } from '../utils';

function ErrorMessage({ error, errorType }) {
  if (findError(error, errorType)) {
    return (
      <p className="mt-1 text-sm font-medium text-red-700">
        {findError(error, errorType)}
      </p>
    );
  }
  return null;
}

export default ErrorMessage;
