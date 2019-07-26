import React from 'react';
import PropTypes from 'prop-types';

import stylesheet from './TrackInfo.module.css';

function TrackInfo({ currentTrack }) {
  return (
    <div className={stylesheet.trackInfo}>
      {currentTrack && (
        <img
          className={stylesheet.trackImage}
          src={currentTrack.album.images[0].url}
          alt=""
        />
      )}
      {currentTrack ? (
        <div className={stylesheet.trackColumn}>
          <span className={stylesheet.trackName}>{currentTrack.name}</span>
          <span className={stylesheet.artistName}>
            {currentTrack.artists[0].name} • {currentTrack.album.name}
          </span>
        </div>
      ) : (
        'No track selected'
      )}
    </div>
  );
}

TrackInfo.propTypes = {
  currentTrack: PropTypes.object,
};

export default TrackInfo;
