import React from 'react';
import PropTypes from 'prop-types';

import stylesheet from './TrackInfo.module.css';

function TrackInfo({ currentTrack }) {
  return <div className={stylesheet.trackInfo}>{currentTrack}</div>;
}

TrackInfo.propTypes = {
  currentTrack: PropTypes.string.isRequired,
};

export default TrackInfo;
