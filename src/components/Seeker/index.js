import React from 'react';

import { setCurrentTime, useAppDispatch, useAppState } from '../../AppManager';
import convertTime from 'functions/convertTime';
import Range from 'components/shared/Range';

import stylesheet from './Seeker.module.css';

function Seeker() {
  const dispatch = useAppDispatch();
  const { currentTime, duration } = useAppState();

  const handleCurrentTimeChange = (value) => {
    setCurrentTime(dispatch, value);
  };

  return (
    <div className={stylesheet.seeker}>
      <div className={stylesheet.time}>{convertTime(currentTime)}</div>
      <Range
        maxValue={duration}
        currentValue={currentTime}
        handleChange={handleCurrentTimeChange}
      />
      <div className={stylesheet.time}>{convertTime(duration)}</div>
    </div>
  );
}

export default Seeker;
