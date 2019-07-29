import React, { useEffect, useRef } from 'react';
import cx from 'classnames';

import Audio from 'components/Audio';
import TrackInfo from 'components/TrackInfo';
import Transport from 'components/Transport';
import Controls from 'components/Controls';
import Visualizer from 'components/Visualizer';
import { useAppState } from '../../AppManager';

import stylesheet from './Player.module.css';

function Player() {
  const { isFullscreen, isPlaying, isMuted, volume } = useAppState();
  const audioRef = useRef(null);
  const classNames = cx(stylesheet.player, {
    [stylesheet.fullscreen]: isFullscreen,
  });

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [audioRef, isPlaying]);

  useEffect(() => {
    audioRef.current.volume = volume;

    if (isMuted) {
      audioRef.current.muted = true;
    } else {
      audioRef.current.muted = false;
    }
  }, [audioRef, isMuted, volume]);

  return (
    <>
      <Visualizer ref={audioRef} />
      <div className={classNames}>
        <TrackInfo />
        <Transport />
        <Controls />
      </div>
      <Audio ref={audioRef} />
    </>
  );
}

export default Player;
