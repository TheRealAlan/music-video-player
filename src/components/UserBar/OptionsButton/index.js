import React from 'react';
import { useGlobal } from 'reactn';

import OptionsIcon from 'icons/OptionsIcon';

import stylesheet from './OptionsButton.module.css';

function OptionsButton() {
  const [isOptionsOpen, setIsOptionsOpen] = useGlobal('isOptionsOpen');
  const isActiveClass = isOptionsOpen ? stylesheet.isActive : '';

  const handleClick = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  return (
    <button
      className={`${stylesheet.optionsButton} ${isActiveClass}`}
      onClick={handleClick}
    >
      <OptionsIcon />
    </button>
  );
}

export default OptionsButton;
