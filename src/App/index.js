import React, { useCallback, useState, useRef, useEffect } from 'react';
// import Spotify from 'spotify-web-api-js';

import AppManager from '../AppManager';

import Fullscreen from 'components/Fullscreen';
import UserBar from 'components/UserBar';
// import Content from 'components/Content';
import Player from 'components/Player';

import stylesheet from './App.module.css';
// import SpotifyWebApi from 'spotify-web-api-js';

// import a track here

function App() {
  // const [currentTime, setCurrentTime] = useState(0);
  // const [currentTrack, setCurrentTrack] = useState(null);
  // const [currentTracks, setCurrentTracks] = useState(null);
  // const [currentUser, setCurrentUser] = useState(null);
  // const [duration, setDuration] = useState(0);
  // const [isFullscreen, setIsFullscreen] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [isMuted, setIsMuted] = useState(false);
  // const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  // const [isRepeating, setIsRepeating] = useState(false);
  // const [isShuffling, setIsShuffling] = useState(false);
  // const [isPlaying, setIsPlaying] = useState(false);
  // const [isTrackListOpen, setIsTrackListOpen] = useState(false);
  // const [playlists, setPlaylists] = useState(null);
  // const [volume, setVolume] = useState(1);

  // const spotifyApi = new SpotifyWebApi();

  // const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  // const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
  // const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
  // const SCOPES = [
  //   'user-read-currently-playing',
  //   'user-read-playback-state',
  //   'streaming',
  //   'user-read-email',
  //   'user-read-private',
  // ];

  // Get the hash of the url
  // const hash = window.location.hash
  //   .substring(1)
  //   .split('&')
  //   .reduce(function(initial, item) {
  //     if (item) {
  //       var parts = item.split('=');
  //       initial[parts[0]] = decodeURIComponent(parts[1]);
  //     }
  //     return initial;
  //   }, {});

  // Clear params
  // window.location.hash = '';

  // const LOGIN_URL = `${AUTH_ENDPOINT}?response_type=token&client_id=${CLIENT_ID}&scope=${SCOPES.join(
  //   '%20',
  // )}&redirect_uri=${REDIRECT_URI}`;

  // const getUserData = useCallback(() => {
  //   spotifyApi.getMe().then((data) => {
  //     setCurrentUser(data);
  //   });
  //   spotifyApi.getUserPlaylists().then((data) => setPlaylists(data));
  // }, [spotifyApi]);

  // const getTracksData = (id) => {
  //   spotifyApi.getPlaylistTracks(id).then((data) => {
  //     setCurrentTracks(data);
  //   });
  // };

  // const getTrackData = (id) => {
  //   spotifyApi.getTrack(id).then((data) => {
  //     setCurrentTrack(data);
  //   });
  // };

  /**
   * Get Spotify token
   */
  // useEffect(() => {
  //   let token = hash.access_token;

  //   if (token && !isLoggedIn) {
  //     spotifyApi.setAccessToken(token);
  //     setIsLoggedIn(true);
  //     getUserData();
  //   }
  // }, [getUserData, hash.access_token, isLoggedIn, spotifyApi]);

  return (
    <AppManager>
      <Fullscreen>
        <div className={stylesheet.app}>
          <UserBar />
          {/* <Content
            currentTracks={currentTracks}
            getTrackData={getTrackData}
            getTracksData={getTracksData}
            isOptionsOpen={isOptionsOpen}
            isTrackListOpen={isTrackListOpen}
            playlists={playlists}
          /> */}
          <Player />
        </div>
      </Fullscreen>
    </AppManager>
  );
}

export default App;
