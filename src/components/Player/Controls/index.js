import React from 'react';

import MuteButton from './MuteButton';
import Volume from './Volume';

import stylesheet from './Controls.module.css';

function Controls() {
  return (
    <div className={stylesheet.controls}>
      <MuteButton />
      <Volume />
    </div>
  );
}

export default Controls;
