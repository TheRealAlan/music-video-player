import React from 'react';
import { useGlobal } from 'reactn';

import ShuffleIcon from 'icons/ShuffleIcon';

import stylesheet from './ShuffleButton.module.css';

function ShuffleButton() {
  const [isShuffling, setIsShuffling] = useGlobal('isShuffling');
  const isActiveClass = isShuffling ? stylesheet.isActive : '';

  const handleClick = () => {
    setIsShuffling(!isShuffling);
  };

  return (
    <button
      className={`${stylesheet.shuffleButton} ${isActiveClass}`}
      onClick={handleClick}
    >
      <ShuffleIcon />
    </button>
  );
}

export default ShuffleButton;
