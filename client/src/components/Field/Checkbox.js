import React from 'react';

function Checkbox({ children, ...props }) {
  return (
    <label className="flex items-center">
      <input
        type="checkbox"
        className="form-checkbox focus:shadow-outline-blue"
        {...props}
      />
      <span className="ml-2 text-sm text-gray-600">{children}</span>
    </label>
  );
}

export default Checkbox;
