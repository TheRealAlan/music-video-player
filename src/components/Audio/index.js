import React, { forwardRef } from 'react';

import {
  setCurrentTime,
  setDuration,
  useAppDispatch,
  useAppState,
} from '../../AppManager';

const Audio = forwardRef((props, ref) => {
  const dispatch = useAppDispatch();
  const { currentTrack } = useAppState();

  return (
    <audio
      ref={ref}
      onLoadedMetadata={(e) => setDuration(dispatch, e.target.duration)}
      onTimeUpdate={(e) => setCurrentTime(dispatch, e.target.currentTime)}
    >
      {currentTrack && <source src={currentTrack.href} type="audio/mpeg" />}
    </audio>
  );
});

export default Audio;
