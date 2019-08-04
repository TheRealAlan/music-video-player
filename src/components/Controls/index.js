import React from 'react';

import Range from 'components/shared/Range';

import {
  setIsFullscreen,
  setIsMuted,
  setVolume,
  useAppDispatch,
  useAppState,
} from '../../AppManager';

import MuteIcon from 'icons/MuteIcon';
import VolumeIcon from 'icons/VolumeIcon';
import FullscreenIcon from 'icons/FullscreenIcon';

import stylesheet from './Controls.module.css';

function Controls() {
  const dispatch = useAppDispatch();
  const { isFullscreen, isMuted, volume } = useAppState();

  const handleMuteClick = () => {
    setIsMuted(dispatch, !isMuted);
  };

  const handleVolumeChange = (value) => {
    setVolume(dispatch, value);
  };

  return (
    <div className={stylesheet.controls}>
      <div className={stylesheet.controlsInner}>
        <button className={stylesheet.muteButton} onClick={handleMuteClick}>
          {isMuted ? <MuteIcon /> : <VolumeIcon />}
        </button>
        <Range value={volume} max={1} handleChange={handleVolumeChange} />
        <button
          className={stylesheet.fullscreenButton}
          onClick={() => setIsFullscreen(dispatch, !isFullscreen)}
        >
          <FullscreenIcon />
        </button>
      </div>
    </div>
  );
}

export default Controls;
