import React, { useCallback, useState, useRef, useEffect } from 'react';
import Spotify from 'spotify-web-api-js';

import Fullscreen from 'components/Fullscreen';
import Audio from 'components/Audio';
import UserBar from 'components/UserBar';
import Content from 'components/Content';
import Player from 'components/Player';
import Visualizer from 'components/Visualizer';

import stylesheet from './App.module.css';
import SpotifyWebApi from 'spotify-web-api-js';

// import a track here

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [currentTracks, setCurrentTracks] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [isRepeating, setIsRepeating] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isTrackListOpen, setIsTrackListOpen] = useState(false);
  const [playlists, setPlaylists] = useState(null);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(null);
  const spotifyApi = new SpotifyWebApi();

  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
  const SCOPES = [
    'user-read-currently-playing',
    'user-read-playback-state',
    'streaming',
    'user-read-email',
    'user-read-private',
  ];

  // Get the hash of the url
  const hash = window.location.hash
    .substring(1)
    .split('&')
    .reduce(function(initial, item) {
      if (item) {
        var parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
      }
      return initial;
    }, {});

  // Clear params
  window.location.hash = '';

  const LOGIN_URL = `${AUTH_ENDPOINT}?response_type=token&client_id=${CLIENT_ID}&scope=${SCOPES.join(
    '%20',
  )}&redirect_uri=${REDIRECT_URI}`;

  const handleTrackClick = (position) => {
    audioRef.current.currentTime = position;
  };

  const getUserData = useCallback(() => {
    spotifyApi.getMe().then((data) => {
      setCurrentUser(data);
    });
    spotifyApi.getUserPlaylists().then((data) => setPlaylists(data));
  }, [spotifyApi]);

  const getTracksData = (id) => {
    spotifyApi.getPlaylistTracks(id).then((data) => {
      setCurrentTracks(data);
    });
  };

  const getTrackData = (id) => {
    spotifyApi.getTrack(id).then((data) => {
      setCurrentTrack(data);
    });
  };

  /**
   * Get Spotify token
   */
  useEffect(() => {
    let token = hash.access_token;

    if (token && !isLoggedIn) {
      spotifyApi.setAccessToken(token);
      setIsLoggedIn(true);
      getUserData();
    }
  }, [getUserData, hash.access_token, isLoggedIn, spotifyApi]);

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
          currentUser={currentUser}
          loginUrl={LOGIN_URL}
          isFullscreen={isFullscreen}
          isLoggedIn={isLoggedIn}
          isOptionsOpen={isOptionsOpen}
          isTrackListOpen={isTrackListOpen}
          setIsOptionsOpen={setIsOptionsOpen}
          setIsTrackListOpen={setIsTrackListOpen}
        />
        <Content
          currentTracks={currentTracks}
          getTrackData={getTrackData}
          getTracksData={getTracksData}
          isOptionsOpen={isOptionsOpen}
          isTrackListOpen={isTrackListOpen}
          playlists={playlists}
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
          currentTrack={currentTrack}
        />
      </div>
    </Fullscreen>
  );
}

export default App;
