import React from 'react';

import NextButton from './NextButton';
import PlayButton from './PlayButton';
import PrevButton from './PrevButton';
import RepeatButton from './RepeatButton';
import ShuffleButton from './ShuffleButton';
import Seeker from './Seeker';

import stylesheet from './Transport.module.css';

function Transport() {
  return (
    <div className={stylesheet.transport}>
      <div className={stylesheet.buttons}>
        <ShuffleButton />
        <PrevButton />
        <PlayButton />
        <NextButton />
        <RepeatButton />
      </div>
      <Seeker />
    </div>
  );
}

export default Transport;
