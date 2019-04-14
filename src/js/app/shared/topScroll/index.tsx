import React, { useEffect } from "react";
import { Events, animateScroll as scroll, scrollSpy } from "react-scroll";

import { Button } from "eoghandotio-ui";

const TopScroll = () => {
  useEffect(() => {
    Events.scrollEvent.register("begin", null);
    Events.scrollEvent.register("end", null);
    scrollSpy.update();
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  });

  const _scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Button className={`btn__round btn__scroll`} onClick={_scrollToTop}>
      <span />
    </Button>
  );
};

export default TopScroll;
