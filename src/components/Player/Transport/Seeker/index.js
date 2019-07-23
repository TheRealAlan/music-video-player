import React from 'react';
import PropTypes from 'prop-types';

import convertTime from 'functions/convertTime';
import Range from 'components/shared/Range';

import stylesheet from './Seeker.module.css';

function Seeker({ duration, currentTime, handleTrackClick }) {
  return (
    <div className={stylesheet.seeker}>
      <div className={stylesheet.time}>{convertTime(currentTime)}</div>
      <Range
        maxValue={duration}
        currentValue={currentTime}
        handleChange={handleTrackClick}
      />
      <div className={stylesheet.time}>{convertTime(duration)}</div>
    </div>
  );
}

Seeker.propTypes = {
  currentTime: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  handleTrackClick: PropTypes.func.isRequired,
};

export default Seeker;
