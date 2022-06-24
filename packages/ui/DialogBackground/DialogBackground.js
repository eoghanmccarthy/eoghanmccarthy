import React from "react";
import PropTypes from "prop-types";
import { css } from "@stitches/react";
import cx from "classnames";

const DialogBackground = ({ children, close }) => {
  return (
    <div
      className={cx("ui-dialog-background", styles().toString())}
      onClick={close}
    >
      {children}
    </div>
  );
};

export default DialogBackground;

DialogBackground.propTypes = {
  close: PropTypes.func.isRequired,
};

const styles = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  zIndex: 10000,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: "100%",
  height: " 100%",
});
