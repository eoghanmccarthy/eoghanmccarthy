import React from "react";

import TopScroll from "components/topScroll";

const Footer: React.FunctionComponent<{}> = () => (
  <footer className={"me__footer"}>
    <TopScroll />
    <a href={"http://eoghan.io"} target={"_blank"}>
      eoghan.io
    </a>
  </footer>
);

export default Footer;
