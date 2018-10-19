import React, { Component } from "react";

export default class GalleryItem extends Component {
  render() {
    const { src, label, onClick } = this.props;

    return (
      <figure className={"media"} onClick={onClick}>
        <img className={"media__content"} src={src} title={label} />
      </figure>
    );
  }
}
