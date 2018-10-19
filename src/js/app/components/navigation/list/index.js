import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import data from "app/config/navigationData";

class List extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  };

  _route = route => {
    this.props.history.push(route);
    this.props.toggleVisibility();
  };

  render() {
    return (
      <nav>
        <ul className="nav-global__menu">
          {data.map((item, index) => (
            <li key={index}>
              <a onClick={() => this._route(item.route)}>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default withRouter(List);
