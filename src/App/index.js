import React, { useState, useRef, useEffect } from 'react';

import Fullscreen from 'components/Fullscreen';
import Audio from 'components/Audio';
import UserBar from 'components/UserBar';
import Content from 'components/Content';
import Player from 'components/Player';
import Visualizer from 'components/Visualizer';

import stylesheet from './App.module.css';

// import a track here
import track from 'tracks/let_it_happen.mp3';

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(track);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [isRepeating, setIsRepeating] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isTrackListOpen, setIsTrackListOpen] = useState(false);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(null);

  const handleTrackClick = (position) => {
    audioRef.current.currentTime = position;
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [audioRef, isPlaying]);

  useEffect(() => {
    audioRef.current.volume = volume;

    if (isMuted) {
      audioRef.current.muted = true;
    } else {
      audioRef.current.muted = false;
    }
  }, [audioRef, volume, isMuted]);

  return (
    <Fullscreen isFullscreen={isFullscreen} setIsFullscreen={setIsFullscreen}>
      <div className={stylesheet.app}>
        <UserBar
          isFullscreen={isFullscreen}
          isOptionsOpen={isOptionsOpen}
          isTrackListOpen={isTrackListOpen}
          setIsOptionsOpen={setIsOptionsOpen}
          setIsTrackListOpen={setIsTrackListOpen}
        />
        <Content
          isOptionsOpen={isOptionsOpen}
          isTrackListOpen={isTrackListOpen}
        />
        <Visualizer ref={audioRef} />
        <Player
          currentTrack={currentTrack}
          currentTime={currentTime}
          duration={duration}
          handleTrackClick={handleTrackClick}
          isFullscreen={isFullscreen}
          isMuted={isMuted}
          isPlaying={isPlaying}
          isRepeating={isRepeating}
          isShuffling={isShuffling}
          setIsFullscreen={setIsFullscreen}
          setIsMuted={setIsMuted}
          setIsPlaying={setIsPlaying}
          setIsRepeating={setIsRepeating}
          setIsShuffling={setIsShuffling}
          setVolume={setVolume}
          volume={volume}
        />
        <Audio
          ref={audioRef}
          handleDuration={setDuration}
          handleCurrentTime={setCurrentTime}
          track={track}
        />
      </div>
    </Fullscreen>
  );
}

export default App;
