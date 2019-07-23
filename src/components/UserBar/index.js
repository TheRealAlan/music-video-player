import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import OptionsIcon from 'icons/OptionsIcon';
import TrackListIcon from 'icons/TrackListIcon';

import stylesheet from './UserBar.module.css';

function UserBar({
  isOptionsOpen,
  isTrackListOpen,
  setIsOptionsOpen,
  setIsTrackListOpen,
}) {
  const handleTrackListClick = () => {
    setIsTrackListOpen(!isTrackListOpen);
  };

  const handleOptionsClick = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  return (
    <div className={stylesheet.userBar}>
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
  );
}

UserBar.propTypes = {
  isOptionsOpen: PropTypes.bool.isRequired,
  isTrackListOpen: PropTypes.bool.isRequired,
  setIsOptionsOpen: PropTypes.func.isRequired,
  setIsTrackListOpen: PropTypes.func.isRequired,
};

export default UserBar;
