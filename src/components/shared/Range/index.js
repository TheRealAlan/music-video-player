import React, { createRef } from 'react';
import PropTypes from 'prop-types';

import convertTime from 'functions/convertTime';

import stylesheet from './Range.module.css';

/**
 * A Range-type component. Looks like a range input, behaves like a range
 * input, but it's much easier to style consistently.
 * - currentValue: the current value the range should represent
 * - maxValue:     the maximum value the range can represent
 * - handleChange: a function that should fire whenever the value is changed
 *
 * TODO:
 * - update track progress as progress handle is dragged
 * - move handle with left / right arrow keys when focused
 */
function Range({ currentValue, maxValue, handleChange }) {
  const trackRef = createRef();
  const progressBarWidth = `${Math.round((currentValue / maxValue) * 100)}%`;

  /**
   * Get the bounds of the DOM track and match it 1:1 with prop values
   */
  const updatePosition = (e) => {
    e.preventDefault();
    const trackRect = trackRef.current.getBoundingClientRect();
    const trackWidth = trackRect.right - trackRect.left;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const position = ((clientX - trackRect.left) / trackWidth) * maxValue;

    handleChange(position);
  };

  const handleMouseMove = (e) => {
    updatePosition(e);
  };

  const handleMouseUp = () => {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  };

  const handleMouseDown = (e) => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div className={stylesheet.range} onClick={handleMouseMove} ref={trackRef}>
      <div
        className={stylesheet.progress}
        style={{ width: progressBarWidth }}
      />
      <div
        aria-valuemin={0}
        aria-valuemax={convertTime(maxValue)}
        aria-valuenow={convertTime(currentValue)}
        className={stylesheet.handle}
        onMouseDown={handleMouseDown}
        role="slider"
        style={{ left: progressBarWidth }}
        tabIndex="0"
      />
    </div>
  );
}

Range.propTypes = {
  currentValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  handleChange: PropTypes.func,
};

export default Range;
