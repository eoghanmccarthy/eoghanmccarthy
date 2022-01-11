import React, { useEffect } from "react";
import { useSpring, animated, config } from "react-spring";
import { Events, scrollSpy } from "react-scroll";

import { animateScroll as scroll } from "react-scroll/modules";
import { Button } from "@eoghanmccarthy/ui";

export const Footer = () => {
  const spring = useSpring({
    config: { ...config.gentle },
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 500,
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
      <Button
        size={"lg"}
        shape={"circle"}
        className={"btn-scroll"}
        onClick={() => scroll.scrollToTop()}
      >
        <span />
        <span />
      </Button>
      <a href={"http://eoghan.io"} target={"_blank"}>
        eoghan.io
      </a>
    </animated.footer>
  );
};
