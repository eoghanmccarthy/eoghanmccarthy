import React, { Component } from "react";

import Slides from "components/lightbox/slides";
import Navigation from "components/lightbox/navigation";
import Button from "components/lightbox/button";

const content = document.querySelectorAll("figure img");

export default class Modal extends Component {
  componentWillMount() {
    this.props.initialiseGallery(content);
  }

  render() {
    const { visible, toggleVisibility, gallery, slideIndexSet } = this.props;

    for (let i = 0; i < content.length; i++) {
      content[i].addEventListener("click", slideIndexSet.bind(null, i));
      content[i].addEventListener("click", toggleVisibility);
    }

    return (
      <div>
        {visible === true && (
          <div className="lightbox">
            <Slides />
            <Navigation />

            <div className="btn-group btn-group__close">
              <Button buttonClass="btn__close" onClick={toggleVisibility} />
            </div>
          </div>
        )}
      </div>
    );
  }
}
