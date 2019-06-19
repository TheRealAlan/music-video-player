import React from 'react';

import NextIcon from 'icons/NextIcon';

import stylesheet from './NextButton.module.css';

function NextButton() {
  return (
    <button className={stylesheet.nextButton}>
      <NextIcon />
    </button>
  );
}

export default NextButton;
