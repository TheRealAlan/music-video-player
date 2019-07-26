import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Audio = forwardRef(
  ({ currentTrack, handleDuration, handleCurrentTime }, ref) => {
    return (
      <audio
        ref={ref}
        onLoadedMetadata={(e) => handleDuration(e.target.duration)}
        onTimeUpdate={(e) => handleCurrentTime(e.target.currentTime)}
      >
        {currentTrack && <source src={currentTrack.href} type="audio/mpeg" />}
      </audio>
    );
  },
);

Audio.propTypes = {
  handleDuration: PropTypes.func.isRequired,
  handleCurrentTime: PropTypes.func.isRequired,
  currentTrack: PropTypes.object,
};

export default Audio;
