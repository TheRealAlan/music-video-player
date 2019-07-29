import React from 'react';
import cx from 'classnames';

import {
  setIsOptionsOpen,
  setIsPlaylistOpen,
  useAppDispatch,
  useAppState,
} from '../../AppManager';

import Account from 'components/Account';
import OptionsIcon from 'icons/OptionsIcon';
import TrackListIcon from 'icons/TrackListIcon';

import stylesheet from './UserBar.module.css';

function UserBar() {
  const dispatch = useAppDispatch();
  const {
    isFullscreen,
    isLoggedIn,
    isOptionsOpen,
    isPlaylistOpen,
  } = useAppState();
  const classNames = cx(stylesheet.userBar, {
    [stylesheet.fullscreen]: isFullscreen,
  });

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

  const LOGIN_URL = `${AUTH_ENDPOINT}?response_type=token&client_id=${CLIENT_ID}&scope=${SCOPES.join(
    '%20',
  )}&redirect_uri=${REDIRECT_URI}`;

  const handlePlaylistClick = () => {
    setIsPlaylistOpen(dispatch, !isPlaylistOpen);

    if (isOptionsOpen) {
      setIsOptionsOpen(dispatch, false);
    }
  };

  const handleOptionsClick = () => {
    setIsOptionsOpen(dispatch, !isOptionsOpen);

    if (isPlaylistOpen) {
      setIsPlaylistOpen(dispatch, false);
    }
  };

  return (
    <div className={classNames}>
      <div className={stylesheet.menuButtons}>
        {/* Track List Button */}
        <button
          className={cx(stylesheet.trackListButton, {
            [stylesheet.isActive]: isPlaylistOpen,
          })}
          onClick={handlePlaylistClick}
        >
          <TrackListIcon />
        </button>

        {/* Options Button */}
        <button
          className={cx(stylesheet.optionsButton, {
            [stylesheet.isActive]: isOptionsOpen,
          })}
          onClick={handleOptionsClick}
        >
          <OptionsIcon />
        </button>
      </div>

      {/* Account */}
      <div className={stylesheet.accountButton}>
        {isLoggedIn ? (
          <Account />
        ) : (
          <a className={stylesheet.loginButton} href={LOGIN_URL}>
            Log In
          </a>
        )}
      </div>
    </div>
  );
}

export default UserBar;
