import React, { useEffect } from 'react';
import { useGlobal } from 'reactn';

import stylesheet from './Volume.module.css';

function Volume() {
  const [isMuted, setIsMuted] = useGlobal('isMuted');
  const [volume, setVolume] = useGlobal('volume');

  useEffect(() => {
    if (volume <= 2) {
      setIsMuted(true);
    }
    return () => setIsMuted(false);
  }, [volume]);

  const handleChange = (e) => {
    setVolume(e.currentTarget.value);
  };

  return (
    <div>
      <input
        className={stylesheet.volume}
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={handleChange}
      />
    </div>
  );
}

export default Volume;
