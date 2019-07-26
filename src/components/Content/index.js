import React from 'react';
import PropTypes from 'prop-types';

import TrackList from './TrackList';
import Options from './Options';

import stylesheet from './Content.module.css';

function Content({
  currentTracks,
  getTrackData,
  getTracksData,
  isOptionsOpen,
  isTrackListOpen,
  playlists,
}) {
  return (
    <div className={stylesheet.content}>
      {isTrackListOpen && (
        <TrackList
          playlists={playlists}
          currentTracks={currentTracks}
          getTrackData={getTrackData}
          getTracksData={getTracksData}
        />
      )}
      {isOptionsOpen && <Options />}
    </div>
  );
}

Content.propTypes = {
  currentTracks: PropTypes.object,
  getTrackData: PropTypes.func.isRequired,
  getTracksData: PropTypes.func.isRequired,
  isOptionsOpen: PropTypes.bool.isRequired,
  isTrackListOpen: PropTypes.bool.isRequired,
  playlists: PropTypes.object,
};

export default Content;
