import React, { useContext } from "react";
import { useTrail, animated, config } from "react-spring";

import { LightboxContext } from "app/context";

const Gallery = ({ listData }) => {
  const lightboxContext = useContext(LightboxContext);

  const trail = useTrail(listData.length, {
    config: { ...config.gentle },
    from: { opacity: 0, y: 320 },
    to: { opacity: 1, y: 0 },
    delay: 400
  });

  return (
    <div className={"gallery"}>
      {trail.map(({ y, ...rest }, index) => (
        <animated.figure
          key={index}
          className={"media"}
          style={{
            ...rest,
            transform: y.interpolate(y => `translateY(${y}px)`)
          }}
          onClick={() => lightboxContext.open(listData, index)}
        >
          <animated.img
            loading={"lazy"}
            className={"media__content"}
            src={listData[index].src}
            title={listData[index].label}
          />
        </animated.figure>
      ))}
    </div>
  );
};

export default Gallery;
