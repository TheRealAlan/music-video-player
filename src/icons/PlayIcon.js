import React from 'react';

const PlayIcon = () => {
  const WIDTH = 14;
  const HEIGHT = 14;
  const OFFSET = 2;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={WIDTH}
      height={HEIGHT}
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
    >
      <polygon
        points={`${OFFSET},0 ${WIDTH},${HEIGHT / 2} ${OFFSET},${HEIGHT}`}
        fill="#fff"
      />
    </svg>
  );
};

export default PlayIcon;
