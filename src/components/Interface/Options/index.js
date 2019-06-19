import React from 'react';
import { useGlobal } from 'reactn';

import stylesheet from './Options.module.css';

function Options() {
  const [isOptionsOpen] = useGlobal('isOptionsOpen');

  return (
    <>
      {isOptionsOpen && (
        <div className={stylesheet.options}>
          <h1>Options</h1>
        </div>
      )}
    </>
  );
}

export default Options;
