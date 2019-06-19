import React from 'react';

import TrackListButton from './TrackListButton';
import OptionsButton from './OptionsButton';

import stylesheet from './UserBar.module.css';

function UserBar() {
  return (
    <div className={stylesheet.userBar}>
      <TrackListButton />
      <OptionsButton />
    </div>
  );
}

export default UserBar;
