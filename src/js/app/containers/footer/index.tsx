import React from "react";
import { connect } from "react-redux";

import { selectConfigData } from "selectors/config";

import TopScroll from "components/topScroll";

const Footer: React.FunctionComponent<{
  config: {
    name: string;
    url: string;
  };
}> = ({ config }) => (
  <footer className={"me__footer"}>
    <TopScroll />
    <a href={config.url} target={"_blank"}>
      {config.name}
    </a>
  </footer>
);

const mapStateToProps = state => ({
  config: selectConfigData(state)
});

export default connect(
  mapStateToProps,
  null
)(Footer);
