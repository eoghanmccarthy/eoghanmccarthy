import React from "react";
import cx from "classnames";
import { css } from "@stitches/react";

import { Button } from "@eoghanmccarthy/ui";

import "./styles.css";

const styles = css({
  "& span": {
    display: "block",
    width: "25px",
    height: "2px",
    backgroundColor: "white",
    "&:last-child": {
      marginTop: "4px",
    },
  },
});

const Base = ({ children, className, onClick, ...rest }) => {
  return (
    <Button
      className={cx(className, styles.toString())}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Button>
  );
};

export const Open = ({ onClick }) => {
  return (
    <Base className={"open"} onClick={onClick}>
      <span />
      <span />
    </Base>
  );
};

export const Close = ({ onClick }) => {
  return (
    <Base className={"close"} onClick={onClick}>
      <span />
      <span />
    </Base>
  );
};

export const Scroll = ({ onClick }) => {
  return (
    <Base className={"scroll"} onClick={onClick}>
      <span />
      <span />
    </Base>
  );
};

export const Prev = ({ onClick }) => {
  return (
    <Base className={"prev"} onClick={onClick}>
      <span />
    </Base>
  );
};

export const Next = ({ onClick }) => {
  return (
    <Base className={"next"} onClick={onClick}>
      <span />
    </Base>
  );
};
