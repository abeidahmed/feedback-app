import React, { useCallback, useRef, useEffect } from 'react';

function OutsideClickHandler({ onOutsideClick, children, ...props }) {
  const containerRef = useRef(null);

  const escapeListener = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        onOutsideClick();
      }
    },
    [onOutsideClick]
  );

  const clickListener = useCallback(
    (e) => {
      if (!containerRef.current.contains(e.target)) {
        onOutsideClick();
      }
    },
    [onOutsideClick]
  );

  useEffect(() => {
    document.addEventListener('click', clickListener);
    document.addEventListener('keyup', escapeListener);

    return () => {
      document.removeEventListener('click', clickListener);
      document.removeEventListener('keyup', escapeListener);
    };
  }, [clickListener, escapeListener]);

  return (
    <div ref={containerRef} {...props}>
      {children}
    </div>
  );
}

export default OutsideClickHandler;
