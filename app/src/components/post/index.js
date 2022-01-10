import React from "react";
import { useParams } from "react-router-dom";

import Media from "../media";

import { useGetPost } from "../../utils/api";

export const Post = () => {
  const { postId } = useParams();
  const { data } = useGetPost({ postId });

  return data ? (
    <article data-post-id={data.id} className={"me__post"}>
      <Media post={data} />
      <span dangerouslySetInnerHTML={{ __html: data.text.toLowerCase() }} />
    </article>
  ) : null;
};
