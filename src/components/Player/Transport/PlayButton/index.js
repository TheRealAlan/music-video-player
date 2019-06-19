import React from 'react';
import { useGlobal } from 'reactn';

import PlayIcon from 'icons/PlayIcon';
import PauseIcon from 'icons/PauseIcon';

import stylesheet from './PlayButton.module.css';

function PlayButton() {
  const [isPlaying, setIsPlaying] = useGlobal('isPlaying');
  const isActiveClass = isPlaying ? stylesheet.isActive : '';

  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      className={`${stylesheet.playButton} ${isActiveClass}`}
      onClick={handleClick}
    >
      {isPlaying ? <PauseIcon /> : <PlayIcon />}
    </button>
  );
}

export default PlayButton;
