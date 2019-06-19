import React from 'react';
import { useGlobal } from 'reactn';

import stylesheet from './Seeker.module.css';

function Seeker() {
  const [duration] = useGlobal('duration');
  const [currentTime] = useGlobal('currentTime');
  const [isPlaying] = useGlobal('isPlaying');
  const progressBarWidth = {
    width: `${Math.round((currentTime / duration) * 100)}%`,
  };

  const convertTime = (time) => {
    let minutes = Math.round(~~((time % 3600) / 60));
    let seconds = Math.round(time % 60);

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
  };

  return (
    <div className={stylesheet.seeker}>
      <div className={stylesheet.time}>{convertTime(currentTime)}</div>
      <div className={stylesheet.timeline}>
        <div className={stylesheet.progress} style={progressBarWidth} />
      </div>
      <div className={stylesheet.time}>
        {isPlaying ? convertTime(duration) : '0:00'}
      </div>
    </div>
  );
}

export default Seeker;
