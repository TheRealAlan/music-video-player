import React from 'react';
import cx from 'classnames';

import {
  setIsPlaying,
  setIsRepeating,
  setIsShuffling,
  useAppDispatch,
  useAppState,
} from '../../AppManager';

import ShuffleIcon from 'icons/ShuffleIcon';
import PrevIcon from 'icons/PrevIcon';
import PlayIcon from 'icons/PlayIcon';
import PauseIcon from 'icons/PauseIcon';
import NextIcon from 'icons/NextIcon';
import RepeatIcon from 'icons/RepeatIcon';

import Seeker from 'components/Seeker';

import stylesheet from './Transport.module.css';

function Transport() {
  const dispatch = useAppDispatch();
  const { isPlaying, isRepeating, isShuffling } = useAppState();

  return (
    <div className={stylesheet.transport}>
      <div className={stylesheet.buttons}>
        {/* Shuffle Button */}
        <button
          className={cx(stylesheet.shuffleButton, stylesheet.transportButton, {
            [stylesheet.isActive]: isShuffling,
          })}
          onClick={() => setIsShuffling(dispatch, !isShuffling)}
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
          onClick={() => setIsPlaying(dispatch, !isPlaying)}
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
          onClick={() => setIsRepeating(dispatch, !isRepeating)}
        >
          <RepeatIcon />
        </button>
      </div>
      <Seeker />
    </div>
  );
}

export default Transport;
