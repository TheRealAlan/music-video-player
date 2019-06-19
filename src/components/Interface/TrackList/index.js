import React from 'react';
import { useGlobal } from 'reactn';

import stylesheet from './TrackList.module.css';

function TrackList() {
  const [isTrackListOpen] = useGlobal('isTrackListOpen');

  return (
    <>
      {isTrackListOpen && (
        <div className={stylesheet.trackList}>
          <h1>Tracklist</h1>
        </div>
      )}
    </>
  );
}

export default TrackList;
