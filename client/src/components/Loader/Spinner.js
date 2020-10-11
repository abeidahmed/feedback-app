import React from 'react';

function Spinner({ ...props }) {
  return (
    <div
      className="absolute transform -translate-x-1/2 -translate-y-1/2 lds-dual-ring left-1/2 top-1/2"
      {...props}
    ></div>
  );
}

export default Spinner;
