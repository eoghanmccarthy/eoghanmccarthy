import React, { Component } from "react";

import Button from "components/navigation/button";
import List from "components/navigation/list";

export default class Modal extends Component {
  render() {
    const { toggleVisibility } = this.props;

    return (
      <div className="nav-global__modal">
        <List toggleVisibility={toggleVisibility} />
        <Button buttonClass="close" onClick={toggleVisibility} />
      </div>
    );
  }
}
