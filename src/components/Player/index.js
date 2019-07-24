import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import TrackInfo from './TrackInfo';
import Transport from './Transport';
import Controls from './Controls';

import stylesheet from './Player.module.css';

function Player({
  currentTime,
  duration,
  currentTrack,
  handleTrackClick,
  isFullscreen,
  isMuted,
  isPlaying,
  isRepeating,
  isShuffling,
  setIsFullscreen,
  setIsMuted,
  setIsPlaying,
  setIsRepeating,
  setIsShuffling,
  setVolume,
  volume,
}) {
  const classNames = cx(stylesheet.player, {
    [stylesheet.fullscreen]: isFullscreen,
  });

  return (
    <div className={classNames}>
      <TrackInfo currentTrack={currentTrack} />
      <Transport
        currentTime={currentTime}
        duration={duration}
        handleTrackClick={handleTrackClick}
        isPlaying={isPlaying}
        isRepeating={isRepeating}
        isShuffling={isShuffling}
        setIsPlaying={setIsPlaying}
        setIsRepeating={setIsRepeating}
        setIsShuffling={setIsShuffling}
      />
      <Controls
        isFullscreen={isFullscreen}
        isMuted={isMuted}
        setIsFullscreen={setIsFullscreen}
        setIsMuted={setIsMuted}
        setVolume={setVolume}
        volume={volume}
      />
    </div>
  );
}

Player.propTypes = {
  currentTime: PropTypes.number.isRequired,
  currentTrack: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  handleTrackClick: PropTypes.func.isRequired,
  isFullscreen: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isMuted: PropTypes.bool.isRequired,
  isRepeating: PropTypes.bool.isRequired,
  isShuffling: PropTypes.bool.isRequired,
  setIsFullscreen: PropTypes.func.isRequired,
  setIsMuted: PropTypes.func.isRequired,
  setIsPlaying: PropTypes.func.isRequired,
  setIsRepeating: PropTypes.func.isRequired,
  setIsShuffling: PropTypes.func.isRequired,
  setVolume: PropTypes.func.isRequired,
  volume: PropTypes.number.isRequired,
};

export default Player;
