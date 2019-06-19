import React, { useEffect } from 'react';
import { useGlobal } from 'reactn';

import MuteIcon from 'icons/MuteIcon';
import VolumeIcon from 'icons/VolumeIcon';

import stylesheet from './MuteButton.module.css';

function MuteButton() {
  const [isMuted, setIsMuted] = useGlobal('isMuted');
  const [volume, setVolume] = useGlobal('volume');
  let currentVolume = volume;

  useEffect(() => {
    if (isMuted) {
      currentVolume = volume;
      setVolume(0);
    }
    return () => setVolume(currentVolume);
  }, [isMuted]);

  const handleClick = () => {
    setIsMuted(!isMuted);
  };

  return (
    <button className={stylesheet.muteButton} onClick={handleClick}>
      {isMuted ? <MuteIcon /> : <VolumeIcon />}
    </button>
  );
}

export default MuteButton;
