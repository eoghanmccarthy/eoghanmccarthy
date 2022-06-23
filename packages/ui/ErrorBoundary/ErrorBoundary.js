import React, { Component } from "react";
import { css } from "@emotion/core";

const styles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: fill-available;
  padding: 0;
  background-color: transparent;
  transition: all 0.25s ease;
`;

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
        <section css={styles}>
          <span>something wrong.</span>
        </section>
      );
    }

    return children;
  }
}
