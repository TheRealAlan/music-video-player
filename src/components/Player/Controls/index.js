import React from 'react';
import PropTypes from 'prop-types';

import Range from 'components/shared/Range';

import MuteIcon from 'icons/MuteIcon';
import VolumeIcon from 'icons/VolumeIcon';

import stylesheet from './Controls.module.css';

function Controls({ isMuted, setIsMuted, volume, setVolume }) {
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
      </div>
    </div>
  );
}

Controls.propTypes = {
  isMuted: PropTypes.bool.isRequired,
  setIsMuted: PropTypes.func.isRequired,
  setVolume: PropTypes.func.isRequired,
  volume: PropTypes.number.isRequired,
};

export default Controls;
