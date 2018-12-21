import React, { Component } from "react";

import Logo from "components/logo";
import Navigation from "containers/navigation";

export default class Header extends Component {
  render() {
    return (
      <header className={"me__header"}>
        <div className={"header__logo"}>
          <Logo />
        </div>
        <div className={"header__nav"}>
          <Navigation />
        </div>
      </header>
    );
  }
}
