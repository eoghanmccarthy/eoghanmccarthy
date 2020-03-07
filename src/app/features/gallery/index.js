import React, { useContext } from "react";
import { useTrail, animated, config } from "react-spring";
import "./styles.scss";

import { LightboxContext } from "app/context";

const Gallery = ({ list }) => {
  const lightboxContext = useContext(LightboxContext);

  const trail = useTrail(list.length, {
    config: { ...config.gentle },
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0 },
    delay: 400
  });

  return (
    <div className={"gallery"}>
      {trail.map(({ y, ...rest }, i) => (
        <animated.figure
          key={i}
          style={{
            ...rest,
            transform: y.interpolate(y => `translateY(${y}%)`)
          }}
          onClick={() => lightboxContext.open(list, i)}
        >
          <animated.img
            loading={"lazy"}
            src={list[i].src}
            title={list[i].label}
          />
        </animated.figure>
      ))}
    </div>
  );
};

export default Gallery;
