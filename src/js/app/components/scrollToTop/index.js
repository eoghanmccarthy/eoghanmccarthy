import React, { Component } from "react";
import * as Scroll from "react-scroll";
import {
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

export default class ScrollToTop extends Component {
  componentDidMount = () => {
    Events.scrollEvent.register("begin");
    Events.scrollEvent.register("end");
    scrollSpy.update();
  };

  componentWillUnmount = () => {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  };

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <div className={"btn__scroll"} onClick={this.scrollToTop}>
        <div className={"bars"}>
          <span />
        </div>
      </div>
    );
  }
}
