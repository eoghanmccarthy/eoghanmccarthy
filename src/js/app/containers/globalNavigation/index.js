import React, { Component } from "react";

import Button from "components/globalNavigation/button";
import Modal from "components/globalNavigation/modal";

export default class GlobalNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }

  handleToggleVisibility = () => {
    this.setState({
      isVisible: !this.state.isVisible
    });
  };

  render() {
    const { isVisible } = this.state;

    return (
      <div className="nav nav-global">
        <Button buttonClass="open" onClick={this.handleToggleVisibility} />
        {isVisible && <Modal toggleVisibility={this.handleToggleVisibility} />}
      </div>
    );
  }
}
