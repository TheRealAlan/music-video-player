import React from 'react';
import PropTypes from 'prop-types';

import Range from 'components/shared/Range';

import MuteIcon from 'icons/MuteIcon';
import VolumeIcon from 'icons/VolumeIcon';
import FullscreenIcon from 'icons/FullscreenIcon';

import stylesheet from './Controls.module.css';

function Controls({
  isFullscreen,
  isMuted,
  setIsFullscreen,
  setIsMuted,
  volume,
  setVolume,
}) {
  const handleMuteClick = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className={stylesheet.controls}>
      <div className={stylesheet.controlsInner}>
        <button className={stylesheet.muteButton} onClick={handleMuteClick}>
          {isMuted ? <MuteIcon /> : <VolumeIcon />}
        </button>
        <Range currentValue={volume} maxValue={1} handleChange={setVolume} />
        <button
          className={stylesheet.fullscreenButton}
          onClick={() => setIsFullscreen(!isFullscreen)}
        >
          <FullscreenIcon />
        </button>
      </div>
    </div>
  );
}

Controls.propTypes = {
  isFullscreen: PropTypes.bool.isRequired,
  isMuted: PropTypes.bool.isRequired,
  setIsFullscreen: PropTypes.func.isRequired,
  setIsMuted: PropTypes.func.isRequired,
  setVolume: PropTypes.func.isRequired,
  volume: PropTypes.number.isRequired,
};

export default Controls;
