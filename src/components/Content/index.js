import React from 'react';

import TrackList from './TrackList';
import Options from './Options';
import Visualizer from './Visualizer';

import stylesheet from './Content.module.css';

function Content() {
  return (
    <div className={stylesheet.content}>
      <TrackList />
      <Options />
      <Visualizer />
    </div>
  );
}

export default Content;
