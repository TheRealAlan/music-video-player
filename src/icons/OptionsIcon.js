import React from 'react';

const OptionsIcon = () => {
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
      <path
        fill="#fff"
        d="M6 23h-6v-2h6v2zm9-2h-6v2h6v-2zm9 0h-6v2h6v-2zm-18-4h-6v2h6v-2zm9 0h-6v2h6v-2zm9 0h-6v2h6v-2zm0-4h-6v2h6v-2zm-18 0h-6v2h6v-2zm9 0h-6v2h6v-2zm-9-4h-6v2h6v-2zm9 0h-6v2h6v-2zm0-4h-6v2h6v-2zm0-4h-6v2h6v-2z"
      />
    </svg>
  );
};

export default OptionsIcon;
