import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

import Media from "../media";

export const Post = ({ children, post }) => {
  const { text, content } = post;
  return (
    <article className={"me__post"}>
      <Media post={post} />
      {children}
      <span>{text}</span>
    </article>
  );
};

Post.propTypes = {
  post: PropTypes.shape({ description: PropTypes.string }).isRequired,
};
