import React from 'react';

const PauseIcon = () => {
  const WIDTH = 14;
  const HEIGHT = 14;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={WIDTH}
      height={HEIGHT}
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
    >
      <polygon points="2,0 5,0 5,14 2,14" fill="#fff" />
      <polygon points="9,0 12,0 12,14 9,14" fill="#fff" />
    </svg>
  );
};

export default PauseIcon;
