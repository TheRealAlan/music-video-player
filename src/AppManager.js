import React, { useContext, useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';
import { statement } from '@babel/template';

const AppDispatch = React.createContext(null);
const AppState = React.createContext(null);

function reducer(state, action) {
  switch (action.type) {
    case 'SET_CURRENT_TIME':
      return {
        ...state,
        currentTime: action.payload,
      };
    case 'SET_CURRENT_TRACK':
      return {
        ...state,
        currentTrack: action.payload,
      };
    case 'SET_DURATION':
      return {
        ...state,
        duration: action.payload,
      };
    case 'SET_IS_FULLSCREEN':
      return {
        ...state,
        isFullscreen: action.payload,
      };
    case 'SET_IS_LOGGED_IN':
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    case 'SET_IS_MUTED':
      return {
        ...state,
        isMuted: action.payload,
      };
    case 'SET_IS_OPTIONS_OPEN':
      return {
        ...state,
        isOptionsOpen: action.payload,
      };
    case 'SET_IS_PLAYING':
      return {
        ...state,
        isPlaying: action.payload,
      };
    case 'SET_IS_PLAYLIST_OPEN':
      return {
        ...state,
        isPlaylistOpen: action.payload,
      };
    case 'SET_IS_REPEATING':
      return {
        ...state,
        isRepeating: action.payload,
      };
    case 'SET_IS_SHUFFLING':
      return {
        ...state,
        isShuffling: action.payload,
      };
    case 'SET_VOLUME':
      return {
        ...state,
        volume: action.payload,
      };
    default:
      return state;
  }
}

function AppManager({ children }) {
  const initialState = {
    currentTime: 0,
    currentTrack: null,
    duration: 0,
    isFullscreen: false,
    isLoggedIn: false,
    isOptionsOpen: false,
    isMuted: false,
    isPlaying: false,
    isPlaylistOpen: false,
    volume: 1,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const memoizedState = useMemo(
    () => ({
      ...state,
    }),
    [state],
  );

  return (
    <AppDispatch.Provider value={dispatch}>
      <AppState.Provider value={memoizedState}>{children}</AppState.Provider>
    </AppDispatch.Provider>
  );
}

AppManager.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * Set the current time in the current track
 *
 * @param {function} dispatch
 * @param {number} currentTime
 */
const setCurrentTime = (dispatch, currentTime) => {
  dispatch({
    type: 'SET_CURRENT_TIME',
    payload: currentTime,
  });
};

/**
 * Set the current track
 *
 * @param {function} dispatch
 * @param {string} currentTrack
 */
const setCurrentTrack = (dispatch, currentTrack) => {
  dispatch({
    type: 'SET_CURRENT_TRACK',
    payload: currentTrack,
  });
};

const setDuration = (dispatch, duration) => {
  dispatch({
    type: 'SET_DURATION',
    payload: duration,
  });
};

/**
 * Toggle fullscreen mode
 *
 * @param {function} dispatch
 * @param {boolean} isFullscreen
 */
const setIsFullscreen = (dispatch, isFullscreen) => {
  dispatch({
    type: 'SET_IS_FULLSCREEN',
    payload: isFullscreen,
  });
};

/**
 * Toggle logged in state
 *
 * @param {function} dispatch
 * @param {boolean} isLoggedIn
 */
const setIsLoggedIn = (dispatch, isLoggedIn) => {
  dispatch({
    type: 'SET_IS_LOGGED_IN',
    payload: isLoggedIn,
  });
};

/**
 * Toggle track muting
 *
 * @param {function} dispatch
 * @param {boolean} isMuted
 */
const setIsMuted = (dispatch, isMuted) => {
  dispatch({
    type: 'SET_IS_MUTED',
    payload: isMuted,
  });
};

/**
 * Toggle Options menu
 *
 * @param {function} dispatch
 * @param {boolean} isOptionsOpen
 */
const setIsOptionsOpen = (dispatch, isOptionsOpen) => {
  dispatch({
    type: 'SET_IS_OPTIONS_OPEN',
    payload: isOptionsOpen,
  });
};

/**
 * Toggle track playing
 *
 * @param {function} dispatch
 * @param {boolean} isPlaying
 */
const setIsPlaying = (dispatch, isPlaying) => {
  dispatch({
    type: 'SET_IS_PLAYING',
    payload: isPlaying,
  });
};

/**
 * Toggle track repeat
 *
 * @param {function} dispatch
 * @param {boolean} isRepeating
 */
const setIsRepeating = (dispatch, isRepeating) => {
  dispatch({
    type: 'SET_IS_REPEATING',
    payload: isRepeating,
  });
};

/**
 * Toggle track shuffling
 *
 * @param {function} dispatch
 * @param {boolean} isShuffling
 */
const setIsShuffling = (dispatch, isShuffling) => {
  dispatch({
    type: 'SET_IS_SHUFFLING',
    payload: isShuffling,
  });
};

/**
 * Toggle Playlist menu
 *
 * @param {function} dispatch
 * @param {boolean} isPlaylistOpen
 */
const setIsPlaylistOpen = (dispatch, isPlaylistOpen) => {
  dispatch({
    type: 'SET_IS_PLAYLIST_OPEN',
    payload: isPlaylistOpen,
  });
};

/**
 * Set track volume
 *
 * @param {function} dispatch
 * @param {volume} float
 */
const setVolume = (dispatch, volume) => {
  dispatch({
    type: 'SET_VOLUME',
    payload: volume,
  });
};

const useAppDispatch = () => useContext(AppDispatch);
const useAppState = () => useContext(AppState);

export default AppManager;
export {
  setCurrentTime,
  setCurrentTrack,
  setDuration,
  setIsFullscreen,
  setIsLoggedIn,
  setIsMuted,
  setIsOptionsOpen,
  setIsPlaying,
  setIsPlaylistOpen,
  setIsRepeating,
  setIsShuffling,
  setVolume,
  useAppDispatch,
  useAppState,
};
