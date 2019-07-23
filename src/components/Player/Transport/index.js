import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import ShuffleIcon from 'icons/ShuffleIcon';
import PrevIcon from 'icons/PrevIcon';
import PlayIcon from 'icons/PlayIcon';
import PauseIcon from 'icons/PauseIcon';
import NextIcon from 'icons/NextIcon';
import RepeatIcon from 'icons/RepeatIcon';

import Seeker from './Seeker';

import stylesheet from './Transport.module.css';

function Transport({
  currentTime,
  duration,
  handleTrackClick,
  isPlaying,
  setIsPlaying,
  isRepeating,
  setIsRepeating,
  isShuffling,
  setIsShuffling,
}) {
  const handleShuffleClick = () => {
    setIsShuffling(!isShuffling);
  };

  const handlePlayPauseClick = () => {
    setIsPlaying(!isPlaying);
  };

  const handleRepeatClick = () => {
    setIsRepeating(!isRepeating);
  };

  return (
    <div className={stylesheet.transport}>
      <div className={stylesheet.buttons}>
        {/* Shuffle Button */}
        <button
          className={cx(stylesheet.shuffleButton, stylesheet.transportButton, {
            [stylesheet.isActive]: isShuffling,
          })}
          onClick={handleShuffleClick}
        >
          <ShuffleIcon />
        </button>

        {/* Previous Button */}
        <button
          className={cx(stylesheet.prevButton, stylesheet.transportButton)}
        >
          <PrevIcon />
        </button>

        {/* Play Button */}
        <button
          className={cx(stylesheet.playButton, stylesheet.transportButton, {
            [stylesheet.isActive]: isPlaying,
          })}
          onClick={handlePlayPauseClick}
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>

        {/* Next Button */}
        <button
          className={cx(stylesheet.nextButton, stylesheet.transportButton)}
        >
          <NextIcon />
        </button>

        {/* Repeat Button */}
        <button
          className={cx(stylesheet.repeatButton, stylesheet.transportButton, {
            [stylesheet.isActive]: isRepeating,
          })}
          onClick={handleRepeatClick}
        >
          <RepeatIcon />
        </button>
      </div>
      <Seeker
        currentTime={currentTime}
        duration={duration}
        handleTrackClick={handleTrackClick}
      />
    </div>
  );
}

Transport.propTypes = {
  currentTime: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  handleTrackClick: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isRepeating: PropTypes.bool.isRequired,
  isShuffling: PropTypes.bool.isRequired,
  setIsPlaying: PropTypes.func.isRequired,
  setIsRepeating: PropTypes.func.isRequired,
  setIsShuffling: PropTypes.func.isRequired,
};

export default Transport;
