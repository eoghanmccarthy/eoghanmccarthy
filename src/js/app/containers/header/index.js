import React, { Component } from "react";

import Logo from "components/logo";
import Navigation from "containers/navigation";

export default class Header extends Component {
  render() {
    return (
      <header>
        <Logo />
        <Navigation />
      </header>
    );
  }
}
