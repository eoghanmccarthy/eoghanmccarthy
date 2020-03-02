import React, { useEffect } from "react";
import { Events, animateScroll as scroll, scrollSpy } from "react-scroll";

import { Button } from "@eoghanmccarthy/ui";

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

  return (
    <Button
      className={`btn__scroll`}
      onClick={() => scroll.scrollToTop()}
      colour={"#999999"}
      tier={"contained"}
      shape={"circle"}
    />
  );
};

export default TopScroll;
