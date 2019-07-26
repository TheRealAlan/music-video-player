import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import stylesheet from './TrackList.module.css';

function TrackList({ currentTracks, getTrackData, getTracksData, playlists }) {
  const [currentPlaylistIndex, setCurrentPlaylistIndex] = useState(null);

  const handlePlaylistClick = (idx) => {
    setCurrentPlaylistIndex(idx);
    getTracksData(playlists.items[idx].id);
  };

  const handleTrackClick = (id) => {
    getTrackData(id);
  };

  return (
    <div className={stylesheet.tracklist}>
      <h1 className={stylesheet.title}>Playlists</h1>
      <div className={stylesheet.menus}>
        {/* Playlists Menu */}
        <div className={stylesheet.playlistsColumn}>
          {playlists ? (
            <ul className={stylesheet.playlistsMenu}>
              {playlists.items.map((item, idx) => (
                <li className={stylesheet.playlistsMenuItem} key={idx}>
                  <button
                    className={cx(stylesheet.playlistsButton, {
                      [stylesheet.isActive]: idx === currentPlaylistIndex,
                    })}
                    onClick={() => handlePlaylistClick(idx)}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            'No playlists'
          )}
        </div>

        {/* Tracks Menu */}
        <div className={stylesheet.tracksColumn}>
          {currentTracks && (
            <ul className={stylesheet.tracksMenu}>
              {currentTracks.items.map((item, idx) => (
                <li
                  key={idx}
                  className={stylesheet.tracksMenuItem}
                  onClick={() => handleTrackClick(item.track.id)}
                >
                  <div className={stylesheet.trackItemColumn}>
                    <span className={stylesheet.trackName}>
                      {item.track.name}
                    </span>
                    <span className={stylesheet.trackArtist}>
                      {item.track.artists[0].name} • {item.track.album.name}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

TrackList.propTypes = {
  currentTracks: PropTypes.object,
  getTrackData: PropTypes.func.isRequired,
  getTracksData: PropTypes.func.isRequired,
  playlists: PropTypes.object,
};

export default TrackList;
