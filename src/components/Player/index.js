import React from 'react';
import PropTypes from 'prop-types';

import TrackInfo from './TrackInfo';
import Transport from './Transport';
import Controls from './Controls';

import stylesheet from './Player.module.css';

function Player() {
  return (
    <div className={stylesheet.player}>
      <TrackInfo />
      <Transport />
      <Controls />
    </div>
  );
}

export default Player;
