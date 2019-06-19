import React from 'react';

import TrackList from './TrackList';
import Options from './Options';
import Visualizer from './Visualizer';

import stylesheet from './Interface.module.css';

function Interface() {
  return (
    <div className={stylesheet.interface}>
      <TrackList />
      <Options />
      <Visualizer />
    </div>
  );
}

export default Interface;
