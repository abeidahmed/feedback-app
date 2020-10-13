import React from 'react';

function BoxContainer({ children }) {
  return (
    <div className="overflow-hidden border border-gray-200 rounded-md shadow">
      {children}
    </div>
  );
}

export default BoxContainer;
