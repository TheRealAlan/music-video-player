import React from 'react';
import { useGlobal } from 'reactn';

import TrackListIcon from 'icons/TrackListIcon';

import stylesheet from './TrackListButton.module.css';

function TrackListButton() {
  const [isTrackListOpen, setIsTrackListOpen] = useGlobal('isTrackListOpen');
  const isActiveClass = isTrackListOpen ? stylesheet.isActive : '';

  const handleClick = () => {
    setIsTrackListOpen(!isTrackListOpen);
  };

  return (
    <button
      className={`${stylesheet.trackListButton} ${isActiveClass}`}
      onClick={handleClick}
    >
      <TrackListIcon />
    </button>
  );
}

export default TrackListButton;
