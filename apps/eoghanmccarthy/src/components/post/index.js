import React from "react";
import { useParams } from "react-router-dom";

import { useGetPost } from "../../utils/api";

import Gallery from "components/gallery";

export const Post = () => {
  const { postId } = useParams();
  const { data } = useGetPost({ postId });

  const gallery = React.useMemo(() => {
    if (Array.isArray(data?.media)) {
      return data.media.filter(
        (item) => item.type === "image" || item.type === "video"
      );
    }
  }, [data]);

  if (!data) {
    return null;
  }

  return (
    <article data-post-id={data.id} className={"me__post"}>
      {gallery?.length ? (
        <div className={"media"}>
          <Gallery list={gallery} />
        </div>
      ) : null}
      <span className={"description"}>
        {typeof data?.text === "function" ? (
          <data.text />
        ) : typeof data?.text === "string" ? (
          data.text
        ) : null}
      </span>
    </article>
  );
};
