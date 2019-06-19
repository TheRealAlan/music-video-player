import React from 'react';

import PrevIcon from 'icons/PrevIcon';

import stylesheet from './PrevButton.module.css';

function PrevButton() {
  return (
    <button className={stylesheet.prevButton}>
      <PrevIcon />
    </button>
  );
}

export default PrevButton;
