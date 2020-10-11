import React from 'react';

function Container({ children, className, ...props }) {
  return (
    <div
      className={`w-full max-w-5xl px-4 mx-auto sm:px-6 lg:px-8 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Container;
