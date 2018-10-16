import React, { Component } from "react";

export default class GalleryItem extends Component {
  render() {
    const { src, label, selectItem } = this.props;

    return (
      <figure className={"media"} onClick={selectItem}>
        <img className={"media__content"} src={src} title={label} />
      </figure>
    );
  }
}
