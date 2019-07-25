import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Account from 'components/Account';
import OptionsIcon from 'icons/OptionsIcon';
import TrackListIcon from 'icons/TrackListIcon';

import stylesheet from './UserBar.module.css';

function UserBar({
  currentUser,
  loginUrl,
  isFullscreen,
  isLoggedIn,
  isOptionsOpen,
  isTrackListOpen,
  setIsOptionsOpen,
  setIsTrackListOpen,
}) {
  const classNames = cx(stylesheet.userBar, {
    [stylesheet.fullscreen]: isFullscreen,
  });

  const handleTrackListClick = () => {
    setIsTrackListOpen(!isTrackListOpen);
  };

  const handleOptionsClick = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  return (
    <div className={classNames}>
      <div className={stylesheet.menuButtons}>
        {/* Track List Button */}
        <button
          className={cx(stylesheet.trackListButton, {
            [stylesheet.activeClass]: isTrackListOpen,
          })}
          onClick={handleTrackListClick}
        >
          <TrackListIcon />
        </button>

        {/* Options Button */}
        <button
          className={cx(stylesheet.optionsButton, {
            [stylesheet.activeClass]: isOptionsOpen,
          })}
          onClick={handleOptionsClick}
        >
          <OptionsIcon />
        </button>
      </div>

      {/* Account */}
      <div className={stylesheet.accountButton}>
        {currentUser ? (
          <Account currentUser={currentUser} />
        ) : (
          <a className={stylesheet.loginButton} href={loginUrl}>
            Log In
          </a>
        )}
      </div>
    </div>
  );
}

UserBar.propTypes = {
  currentUser: PropTypes.object,
  isLoggedIn: PropTypes.bool.isRequired,
  loginUrl: PropTypes.string.isRequired,
  isOptionsOpen: PropTypes.bool.isRequired,
  isTrackListOpen: PropTypes.bool.isRequired,
  setIsOptionsOpen: PropTypes.func.isRequired,
  setIsTrackListOpen: PropTypes.func.isRequired,
};

export default UserBar;
