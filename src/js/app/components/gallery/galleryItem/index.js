import React, { Component } from "react";

export default class GalleryItem extends Component {
  render() {
    const { src, label } = this.props;

    return (
      <figure className={"media"}>
        <img className={"media__content"} src={src} title={label} />
      </figure>
    );
  }
}
