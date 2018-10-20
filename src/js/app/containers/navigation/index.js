import React, { Component } from "react";

import Button from "components/navigation/button";
import Modal from "components/navigation/modal";

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }

  _toggleVisibility = () => {
    this.setState(state => {
      return { isVisible: !state.isVisible };
    });
  };

  render() {
    const { isVisible } = this.state;

    return (
      <div className="nav nav-global">
        <Button buttonClass="open" onClick={this._toggleVisibility} />
        {isVisible && <Modal toggleVisibility={this._toggleVisibility} />}
      </div>
    );
  }
}
