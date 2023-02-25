import React from "react";

const coordinates = ["24.3465531,123.7309762,12z"];

const Post = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {coordinates.map((coords, i) => {
        const url = `https://www.google.com/maps/@${coords}`;
        return (
          <a
            style={{ wordBreak: "break-all" }}
            key={i}
            href={url}
            target={"_blank"}
          >
            {coords}
          </a>
        );
      })}
    </div>
  );
};

export default Post;
