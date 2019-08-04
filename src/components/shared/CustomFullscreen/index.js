import React from 'react';
import PropTypes from 'prop-types';

import Fullscreen from 'react-full-screen';

import { useAppDispatch, useAppState, setIsFullscreen } from 'AppManager';

function CustomFullscreen({ children }) {
  const dispatch = useAppDispatch();
  const { isFullscreen } = useAppState();

  const handleFullscreenChange = (isFullscreen) => {
    setIsFullscreen(dispatch, isFullscreen);
  };

  return (
    <Fullscreen enabled={isFullscreen} onChange={handleFullscreenChange}>
      {children}
    </Fullscreen>
  );
}

CustomFullscreen.propTypes = {
  children: PropTypes.node,
};

export default CustomFullscreen;
