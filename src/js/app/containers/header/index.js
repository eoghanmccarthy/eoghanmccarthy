import React, { Component } from "react";

import Logo from "components/logo";
import GlobalNavigation from "containers/globalNavigation";

export default class Header extends Component {
  render() {
    return (
      <header>
        <Logo />
        <GlobalNavigation />
      </header>
    );
  }
}
