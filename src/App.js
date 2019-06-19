import React from 'react';
import { setGlobal } from 'reactn';

import UserBar from './components/UserBar';
import Interface from './components/Interface';
import Player from './components/Player';

import stylesheet from './App.module.css';

// import a track here
import track from './tracks/let_it_happen.mp3';

function App() {
  setGlobal({
    currentTime: null,
    currentTrack: track,
    duration: null,
    isPlaying: false,
    isLooping: false,
    isMuted: false,
    isOptionsOpen: false,
    isShuffling: false,
    isTrackListOpen: false,
    volume: 100,
  });

  return (
    <div className={stylesheet.app}>
      <UserBar />
      <Interface />
      <Player />
    </div>
  );
}

export default App;
