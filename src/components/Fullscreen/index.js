import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function Fullscreen({ children, isFullscreen, setIsFullscreen }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isFullscreen) {
      ref.current.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    } else {
      document.webkitExitFullscreen();
    }
  }, [isFullscreen, setIsFullscreen]);

  return <div ref={ref}>{children}</div>;
}

Fullscreen.propTypes = {
  children: PropTypes.node,
  isFullscreen: PropTypes.bool.isRequired,
  setIsFullscreen: PropTypes.func.isRequired,
};

export default Fullscreen;
