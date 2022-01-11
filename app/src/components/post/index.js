import React from "react";
import { useParams } from "react-router-dom";
import { config, animated, useSpring } from "react-spring";

import { useGetPost } from "../../utils/api";

import Media from "../media";

export const Post = () => {
  const { postId } = useParams();
  const { data } = useGetPost({ postId });

  const spring = useSpring({
    config: { ...config.gentle },
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 250,
    reset: true,
  });

  return data ? (
    <article data-post-id={data.id} className={"me__post"}>
      <Media post={data} />
      <animated.span
        style={spring}
        dangerouslySetInnerHTML={{ __html: data.text.toLowerCase() }}
      />
    </article>
  ) : null;
};
