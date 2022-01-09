import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

import Media from "../media";

export const Post = ({ children, post }) => {
  const { id, text, content } = post;
  return (
    <article data-post-id={id} className={"me__post"}>
      <Media post={post} />
      {children}
      <span dangerouslySetInnerHTML={{ __html: text.toLowerCase() }} />
    </article>
  );
};

Post.propTypes = {
  post: PropTypes.shape({ description: PropTypes.string }).isRequired,
};
