import * as React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { css } from "@emotion/core";

const styles = () => css`
  &:focus {
    box-shadow: 0 0 0 3px white;
  }
`;

const Button = ({
  children,
  className,
  role = "button",
  type = "button",
  tabIndex = "0",
  isDisabled = false,
  onClick = () => null,
  size = 32,
  shape = "circle",
  ...rest
}) => {
  return (
    <button
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
        borderWidth: 0,
        borderStyle: "solid",
        outline: "none",
        overflow: "hidden",
        transition: "all 0.25s ease 0s",
        userSelect: "none",
        cursor: "pointer",
        minWidth:
          shape === "square" || shape === "circle" ? `${size}px` : undefined,
        minHeight: `${size}px`,
        padding: `0 ${shape === "circle" ? "0" : "0.75em"}`,
        borderRadius: borderRadius[shape],
      }}
      className={cx("ui-button", { disabled: isDisabled }, className)}
      //css={styles()}
      role={role}
      type={type}
      tabIndex={tabIndex}
      disabled={isDisabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  href: PropTypes.string,
  target: PropTypes.oneOf(["_blank", "_self", "_parent", "_top"]),
  size: PropTypes.oneOf([24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72]),
  shape: PropTypes.oneOf(["square", "rounded", "circle", "capsule"]),
};

const borderRadius = {
  square: "0",
  rounded: "2px",
  circle: "100%",
  capsule: "1000px",
};
