import React, { useEffect } from "react";
import * as Scroll from "react-scroll";
import { Events, animateScroll as scroll, scrollSpy } from "react-scroll";

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
    <div className={"btn btn__round btn__scroll"} onClick={_scrollToTop}>
      <div className={"bars"}>
        <span />
      </div>
    </div>
  );
};

export default TopScroll;
