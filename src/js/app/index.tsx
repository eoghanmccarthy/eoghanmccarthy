import React, { useState, useLayoutEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router";

import { selectConfigIsLoaded } from "selectors/config";

import * as configActions from "actions/config";

import Routes from "routes";

const App = ({ fetchGlobalConfig, configIsLoaded }) => {
  const [appReady, setAppReady] = useState(false);

  useLayoutEffect(
    () => {
      _bootstrapAsync();
    },
    [configIsLoaded]
  );

  const _bootstrapAsync = async () => {
    configIsLoaded ? setAppReady(true) : fetchGlobalConfig();
  };

  return !appReady ? null : <Routes />;
};

const mapStateToProps = state => ({
  configIsLoaded: selectConfigIsLoaded(state)
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(configActions, dispatch);
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
