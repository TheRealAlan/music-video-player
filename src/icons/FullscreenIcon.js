import React from 'react';

const FullscreenIcon = () => {
  const WIDTH = 24;
  const HEIGHT = 24;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={WIDTH}
      height={HEIGHT}
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
    >
      <g fill="#fff">
        <polygon points={'0,0 8,0 8,2 2,2 2,8 0,8'} />
        <polygon points={'16,0 24,0 24,8 22,8 22,2 16,2'} />
        <polygon points={'0,16 2,16 2,22 8,22 8,24 0,24'} />
        <polygon points={'16,22 22,22 22,16 24,16 24,24 16,24'} />
      </g>
    </svg>
  );
};

export default FullscreenIcon;
