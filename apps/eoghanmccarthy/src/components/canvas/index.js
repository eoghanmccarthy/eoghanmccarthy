import React, { useEffect, useRef } from "react";
import p5 from "p5";

function sketch(p) {
  p.setup = function () {
    p.createCanvas(800, 800);
    p.noSmooth();
  };

  p.draw = function () {
    setGradient();
  };

  // https://happycoding.io/examples/p5js/for-loops/vertical-gradient
  function setGradient() {
    const m = 100;

    const topR = 255 * p.noise(p.frameCount / m);
    const topG = 255 * p.noise(1000 + p.frameCount / m);
    const topB = 255 * p.noise(2000 + p.frameCount / m);
    const bottomR = 255 * p.noise(3000 + p.frameCount / m);
    const bottomG = 255 * p.noise(4000 + p.frameCount / m);
    const bottomB = 255 * p.noise(5000 + p.frameCount / m);

    const topColor = p.color(topR, topG, topB);
    const bottomColor = p.color(bottomR, bottomG, bottomB);

    for (let y = 0; y < p.height; y++) {
      const lineColor = p.lerpColor(topColor, bottomColor, y / p.height);
      p.stroke(lineColor);
      p.line(0, y, p.width, y);
    }
  }
}

const Art = () => {
  const p5ContainerRef = useRef();

  useEffect(() => {
    const p5Instance = new p5(sketch, p5ContainerRef.current);

    return () => {
      p5Instance.remove();
    };
  }, []);

  return <div ref={p5ContainerRef} />;
};

export default Art;
