/**
 * Convert time in seconts to string format: MM:SS
 *
 * @param {number} time
 */
export default function convertTime(time) {
  let minutes = Math.round(~~((time % 3600) / 60));
  let seconds = Math.round(time % 60);

  // Add leading zero
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return isNaN(time) ? '0:00' : `${minutes}:${seconds}`;
}
