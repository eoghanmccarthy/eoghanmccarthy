import * as React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { css } from "@stitches/react";

const Button = ({
  children,
  className,
  as = "button",
  role = "button",
  type = "button",
  tabIndex = "0",
  disabled = false,
  onClick = () => null,
  href = "",
  target = "_blank",
  variant = "contained",
  theme = "primary",
  shape = "circle",
  size = 48,
  ...rest
}) => {
  const Element = as;

  const buttonProps = {
    role,
    type,
    disabled,
    onClick,
  };

  const aProps = {
    href,
    target,
  };

  return (
    <Element
      className={cx(
        "ui-button",
        className,
        styles({ shape, size, variant, theme }).toString()
      )}
      tabIndex={tabIndex}
      {...(as === "button" ? { ...buttonProps } : { ...aProps })}
      {...rest}
    >
      {children}
    </Element>
  );
};

export default Button;

Button.propTypes = {
  as: PropTypes.oneOf(["button", "a"]),
  size: PropTypes.oneOf([32, 48, 60]),
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
  "&:focus": {
    boxShadow: "0 0 0 3px white",
  },
  variants: {
    theme: {
      primary: {
        backgroundColor: "#0000ff",
      },
      transparent: {
        backgroundColor: "transparent",
      },
      yellow: {
        backgroundColor: "#ff0",
      },
    },
    shape: {
      rounded: {
        padding: "0 1em",
        borderRadius: "3px",
      },
      circle: {
        borderRadius: "100%",
      },
    },
    size: {
      32: {
        minHeight: `32px`,
      },
      48: {
        minHeight: `48px`,
      },
      60: {
        minHeight: `60px`,
      },
    },
  },
  compoundVariants: [
    {
      shape: "circle",
      size: 32,
      css: {
        minWidth: "32px",
      },
    },
    {
      shape: "circle",
      size: 48,
      css: {
        minWidth: "48px",
      },
    },
    {
      shape: "circle",
      size: 60,
      css: {
        minWidth: "60px",
      },
    },
  ],
});
