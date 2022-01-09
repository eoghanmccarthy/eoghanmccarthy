import React from "react";
import { useTrail, animated, config } from "react-spring";
import "./styles.scss";

const Gallery = ({ list, onClick }) => {
  const trail = useTrail(list.length, {
    config: { ...config.gentle },
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0 },
    delay: 400,
  });

  return (
    <div className={"gallery"}>
      {trail.map(({ y, ...rest }, i) => {
        return (
          <animated.figure
            key={i}
            style={{
              ...rest,
              transform: y.interpolate((y) => `translateY(${y}%)`),
            }}
            onClick={() => onClick(i)}
          >
            <animated.img
              loading={"lazy"}
              src={list[i].src}
              title={list[i].label}
            />
          </animated.figure>
        );
      })}
    </div>
  );
};

export default Gallery;
