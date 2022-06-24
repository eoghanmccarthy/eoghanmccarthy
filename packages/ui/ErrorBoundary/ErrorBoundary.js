import React, { Component } from "react";
import { css } from "@stitches/react";

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <section className={styles()}>
          <span>something wrong.</span>
        </section>
      );
    }

    return children;
  }
}

const styles = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
});
