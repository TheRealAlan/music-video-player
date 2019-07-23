import React from 'react';
import PropTypes from 'prop-types';

import TrackList from './TrackList';
import Options from './Options';

import stylesheet from './Content.module.css';

function Content({ isOptionsOpen, isTrackListOpen }) {
  return (
    <div className={stylesheet.content}>
      {isTrackListOpen && <TrackList />}
      {isOptionsOpen && <Options />}
    </div>
  );
}

Content.propTypes = {
  isOptionsOpen: PropTypes.bool.isRequired,
  isTrackListOpen: PropTypes.bool.isRequired,
};

export default Content;
