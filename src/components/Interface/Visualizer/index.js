import React, { useRef, useEffect } from 'react';
import { useGlobal } from 'reactn';

import stylesheet from './Visualizer.module.css';

function Visualizer() {
  const [currentTrack] = useGlobal('currentTrack');
  const [volume] = useGlobal('volume');
  const [isPlaying] = useGlobal('isPlaying');
  const [isLooping] = useGlobal('isLooping');
  const [isMuted] = useGlobal('isMuted');
  const [duration, setDuration] = useGlobal('duration');
  const [currentTime, setCurrentTime] = useGlobal('currentTime');

  const canvasRef = useRef();
  const audioRef = useRef();

  useEffect(() => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioCtx = new AudioContext();
    const node = audioCtx.createGain();
    const analyzer = audioCtx.createAnalyser();
    const input = audioCtx.createMediaElementSource(audioRef.current);

    node.gain.value = volume;
    input.connect(analyzer);
    analyzer.connect(node.gain);
    analyzer.connect(audioCtx.destination);

    const ctx = canvasRef.current.getContext('2d');

    // Bars Visualizer
    // TODO: move to separate component, FFS clean this up
    analyzer.fftSize = 256;
    const width = canvasRef.current.width;
    const height = canvasRef.current.height;
    const bufferLength = analyzer.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    ctx.clearRect(0, 0, width, height);

    const draw = () => {
      requestAnimationFrame(draw);
      const barWidth = (width / bufferLength) * 2.5;
      let barHeight = 0;
      let x = 0;

      analyzer.getByteFrequencyData(dataArray);
      ctx.fillStyle = 'rgb(0, 0, 0)';
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];
        ctx.fillStyle = `rgb(${barHeight + 100},255,0)`;
        ctx.fillRect(x, height - barHeight, barWidth, barHeight);
        x += barWidth + 1;
      }
    };

    draw();
  }, [currentTrack]);

  // TODO: make more performant
  useEffect(() => {
    const updateInterval = setInterval(() => {
      setCurrentTime(audioRef.current.currentTime);
    }, 200);
    return () => clearInterval(updateInterval);
  });

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    }

    setDuration(audioRef.current.duration);
    audioRef.current.volume = volume * 0.01;

    return () => audioRef.current.pause();
  }, [isPlaying, volume, currentTrack]);

  return (
    <>
      <canvas ref={canvasRef} className={stylesheet.visualizer} />
      <audio
        ref={audioRef}
        src={currentTrack}
        loop={isLooping}
        muted={isMuted}
      />
    </>
  );
}

export default Visualizer;
