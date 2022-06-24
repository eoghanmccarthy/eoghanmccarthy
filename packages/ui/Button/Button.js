import * as React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { css } from "@stitches/react";

const Button = ({
  children,
  className,
  role = "button",
  type = "button",
  tabIndex = "0",
  disabled = false,
  onClick = () => null,
  variant = "primary",
  shape = "circle",
  size = "lg",
  ...rest
}) => {
  return (
    <button
      className={cx(
        "ui-button",
        className,
        styles({ shape, size, variant }).toString()
      )}
      role={role}
      type={type}
      tabIndex={tabIndex}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  shape: PropTypes.oneOf(["square", "rounded", "circle", "capsule"]),
};

const styles = css({
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
  padding: 0,
  borderRadius: 0,
  variants: {
    variant: {
      primary: {
        backgroundColor: "#0000ff",
      },
    },
    shape: {
      rounded: {
        borderRadius: "4px",
      },
      circle: {
        borderRadius: "100%",
      },
    },
    size: {
      lg: {
        minWidth: "48px",
        minHeight: `48px`,
      },
    },
  },
});
