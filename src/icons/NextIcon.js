import React from 'react';

const NextIcon = () => {
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
      <polygon
        points={`2,0 10,5 10,0 12,0 12,12 10,12 10,7 2,12`}
        fill="#fff"
      />
    </svg>
  );
};

export default NextIcon;
