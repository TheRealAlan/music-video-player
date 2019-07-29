import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { useAppState } from '../../AppManager';

function Fullscreen({ children }) {
  const { isFullscreen } = useAppState();
  const ref = useRef(null);

  useEffect(() => {
    if (isFullscreen) {
      ref.current.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    } else {
      document.webkitExitFullscreen();
    }
  }, [isFullscreen]);

  return <div ref={ref}>{children}</div>;
}

Fullscreen.propTypes = {
  children: PropTypes.node,
};

export default Fullscreen;
