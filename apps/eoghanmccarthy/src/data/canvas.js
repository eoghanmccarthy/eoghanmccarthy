import React from "react";

import Art from "../components/canvas";

export const items = [
  {
    id: "first",
    status: "draft",
    Component: Art,
  },
];

console.log(
  "number of live posts",
  items.filter((p) => p.status !== "draft").length
);
