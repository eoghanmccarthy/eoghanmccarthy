import React, { useEffect } from "react";
import { useSpring, animated, config } from "react-spring";
import { Events, scrollSpy } from "react-scroll";
import { animateScroll as scroll } from "react-scroll/modules";
import { Spacer } from "@eoghanmccarthy/ui";

import * as IconButtons from "components/iconButtons";

export const Footer = () => {
  const spring = useSpring({
    config: { ...config.gentle },
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 250,
  });

  useEffect(() => {
    Events.scrollEvent.register("begin", null);
    Events.scrollEvent.register("end", null);
    scrollSpy.update();
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  });

  return (
    <animated.footer style={spring} className={"me__footer"}>
      <IconButtons.Scroll onClick={() => scroll.scrollToTop()} />
      <Spacer />
      <a href={"http://eoghan.io"} target={"_blank"}>
        eoghan.io
      </a>
    </animated.footer>
  );
};
