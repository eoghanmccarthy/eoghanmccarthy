import React from "react";
import { useSelector } from "react-redux";

import TopScroll from "global/topScroll";

const Footer = () => {
  const auth = useSelector(state => state.app.authentication);

  return (
    <footer className={"me__footer"}>
      <TopScroll />
      <a href={auth.data.url} target={"_blank"}>
        {auth.data.name}
      </a>
    </footer>
  );
};

export default Footer;
