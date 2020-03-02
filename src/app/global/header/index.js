import React from "react";
import { animated, config, interpolate, useSpring } from "react-spring";

import AnimatedLogo from "componentLib/logo";
import GlobalNavigation from "global/navigation";

const Header = () => {
  const { height } = useSpring({
    height: location.pathname === "/" ? window.innerHeight : 280,
    config: { ...config.stiff, clamp: true }
  });

  return (
    <animated.header
      style={{ height: interpolate([height], h => `${h}px`) }}
      className={"me__header"}
    >
      <AnimatedLogo />
      <GlobalNavigation />
    </animated.header>
  );
};

export default Header;
