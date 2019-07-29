import React, { useRef, useEffect, forwardRef } from 'react';

import stylesheet from './Visualizer.module.css';

const Visualizer = forwardRef((props, ref) => {
  const canvasRef = useRef();

  useEffect(() => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioCtx = new AudioContext();
    const node = audioCtx.createGain();
    const analyzer = audioCtx.createAnalyser();
    const input = audioCtx.createMediaElementSource(ref.current);
    const ctx = canvasRef.current.getContext('2d');
    node.gain.value = ref.current.volume;
    input.connect(analyzer);
    analyzer.connect(node.gain);
    analyzer.connect(audioCtx.destination);

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
  }, [ref]);

  return <canvas ref={canvasRef} className={stylesheet.visualizer} />;
});

export default Visualizer;
