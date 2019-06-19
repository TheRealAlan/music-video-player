import React from 'react';

const PrevIcon = () => {
  const WIDTH = 12;
  const HEIGHT = 12;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={WIDTH}
      height={HEIGHT}
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
    >
      <polygon points={`0,0 2,0 2,5 10,0 10,12 2,7 2,12 0,12`} fill="#fff" />
    </svg>
  );
};

export default PrevIcon;
