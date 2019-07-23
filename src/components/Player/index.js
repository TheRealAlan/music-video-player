import React from 'react';
import PropTypes from 'prop-types';

import TrackInfo from './TrackInfo';
import Transport from './Transport';
import Controls from './Controls';

import stylesheet from './Player.module.css';

function Player({
  currentTime,
  duration,
  currentTrack,
  handleTrackClick,
  isMuted,
  isPlaying,
  isRepeating,
  isShuffling,
  setIsMuted,
  setIsPlaying,
  setIsRepeating,
  setIsShuffling,
  setVolume,
  volume,
}) {
  return (
    <div className={stylesheet.player}>
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
        isMuted={isMuted}
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
  isPlaying: PropTypes.bool.isRequired,
  isMuted: PropTypes.bool.isRequired,
  isRepeating: PropTypes.bool.isRequired,
  isShuffling: PropTypes.bool.isRequired,
  setIsMuted: PropTypes.func.isRequired,
  setIsPlaying: PropTypes.func.isRequired,
  setIsRepeating: PropTypes.func.isRequired,
  setIsShuffling: PropTypes.func.isRequired,
  setVolume: PropTypes.func.isRequired,
  volume: PropTypes.number.isRequired,
};

export default Player;
