import React, { Component } from "react";

import ErrorDisplay from "shared/errorDisplay";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return (
        <div
          style={{
            width: "100%",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          <ErrorDisplay message={"Something went wrong."} />
        </div>
      );
    }

    return children;
  }
}
