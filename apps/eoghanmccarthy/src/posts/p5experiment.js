import React, { useEffect, useRef } from "react";
import p5 from "p5";

// function sketch(p) {
//   p.setup = function () {
//     p.createCanvas(800, 800);
//     p.noSmooth();
//   };
//
//   p.draw = function () {
//     p.clear();
//     //p.translate(p.width / 2, p.height / 2);
//     setGradient();
//   };
//
//   // https://happycoding.io/examples/p5js/for-loops/vertical-gradient
//   function setGradient() {
//     const m = 100;
//
//     const topR = 255 * p.noise(p.frameCount / m);
//     const topG = 255 * p.noise(1000 + p.frameCount / m);
//     const topB = 255 * p.noise(2000 + p.frameCount / m);
//     const bottomR = 255 * p.noise(3000 + p.frameCount / m);
//     const bottomG = 255 * p.noise(4000 + p.frameCount / m);
//     const bottomB = 255 * p.noise(5000 + p.frameCount / m);
//
//     const topColor = p.color(topR, topG, topB);
//     const bottomColor = p.color(bottomR, bottomG, bottomB);
//
//     for (let y = 0; y < p.height; y++) {
//       const lineColor = p.lerpColor(topColor, bottomColor, y / p.height);
//       p.stroke(lineColor);
//       p.line(0, y, p.width, y);
//     }
//   }
// }

let sketch = function (p) {
  let rings = 50;
  let dim_init = 50;
  let dim_delta = 4;

  let chaos_init = 0.2;
  let chaos_delta = 0.12;
  let chaos_mag = 20;

  let ox = p.random(10000);
  let oy = p.random(10000);
  let oz = p.random(10000);

  p.setup = function () {
    p.createCanvas(800, 800);
    p.strokeWeight(1);
    p.stroke(0);
    p.smooth();
    p.noFill();
    //p.noLoop();
  };

  p.draw = function () {
    p.clear();
    p.translate(p.width / 2, p.height / 2);
    display();
  };

  function display() {
    //ox+=0.04;
    oy -= 0.02;
    oz += 0.01;
    for (let i = 0; i < rings; i++) {
      p.beginShape();
      for (let angle = 0; angle < 360; angle++) {
        let radian = p.radians(angle);
        let radius =
          chaos_mag *
            getNoiseWithTime(radian, chaos_delta * i + chaos_init, oz) +
          (dim_delta * i + dim_init);
        p.vertex(radius * p.cos(radian), radius * p.sin(radian));
      }
      p.endShape(p.CLOSE);
    }
  }

  function getNoiseWithTime(radian, dim, time) {
    let r = radian % p.TWO_PI;
    if (r < 0.0) {
      r += p.TWO_PI;
    }
    return p.noise(ox + p.cos(r) * dim, oy + p.sin(r) * dim, oz + time);
  }
};

const Art = () => {
  const p5ContainerRef = useRef();

  useEffect(() => {
    const p5Instance = new p5(sketch, p5ContainerRef.current);

    return () => {
      p5Instance.remove();
    };
  }, []);

  return <div id={"sketch"} ref={p5ContainerRef} />;
};

export default Art;
