import React from 'react';
import { useGlobal } from 'reactn';

import RepeatIcon from 'icons/RepeatIcon';

import stylesheet from './RepeatButton.module.css';

function RepeatButton() {
  const [isRepeating, setIsRepeating] = useGlobal('isRepeating');
  const isActiveClass = isRepeating ? stylesheet.isActive : '';

  const handleClick = () => {
    setIsRepeating(!isRepeating);
  };

  return (
    <button
      className={`${stylesheet.repeatButton} ${isActiveClass}`}
      onClick={handleClick}
    >
      <RepeatIcon />
    </button>
  );
}

export default RepeatButton;
