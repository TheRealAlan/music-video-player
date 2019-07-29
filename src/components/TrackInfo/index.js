import React from 'react';

import { useAppState } from '../../AppManager';

import stylesheet from './TrackInfo.module.css';

function TrackInfo() {
  const { currentTrack } = useAppState();

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

export default TrackInfo;
