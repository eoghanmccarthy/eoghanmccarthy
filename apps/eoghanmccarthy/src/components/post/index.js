import React from "react";
import { useParams } from "react-router-dom";

import { useGetPost } from "../../utils/api";

import CanvasResponsiveWrapper from "../canvasResponsiveWrapper";
import Gallery from "components/gallery";

export const Post = () => {
  const { postId } = useParams();
  const { data } = useGetPost(
    { postId },
    {
      select: ({ media, ...rest }) => ({
        media: Array.isArray(media)
          ? media.filter(
              (item) => item.type === "image" || item.type === "video"
            )
          : undefined,
        ...rest,
      }),
    }
  );

  if (!data) {
    return null;
  }

  const hasContent = Boolean(data.media) || Boolean(data.Component);

  return (
    <article data-post-id={data.id} className={"me__post"}>
      {hasContent ? (
        <div className={"content"}>
          {data.Component ? (
            <CanvasResponsiveWrapper>
              <data.Component />
            </CanvasResponsiveWrapper>
          ) : null}
          {Boolean(data.media) ? <Gallery list={data.media} /> : null}
        </div>
      ) : null}
      <span className={"description"}>
        {typeof data.text === "function" ? (
          <data.text />
        ) : typeof data.text === "string" ? (
          data.text
        ) : null}
      </span>
    </article>
  );
};
