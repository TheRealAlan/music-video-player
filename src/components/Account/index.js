import React from 'react';
import PropTypes from 'prop-types';

import stylesheet from './Account.module.css';

function Account({ currentUser }) {
  return (
    <div className={stylesheet.account}>
      <div
        className={stylesheet.avatar}
        style={{ backgroundImage: `url(${currentUser.images[0].url})` }}
      />
      <a
        href={currentUser.href}
        className={stylesheet.userName}
        target="_blank"
        rel="noopener noreferrer"
      >
        {currentUser.display_name}
      </a>
    </div>
  );
}

Account.propTypes = {
  currentUser: PropTypes.object.isRequired,
};

export default Account;
