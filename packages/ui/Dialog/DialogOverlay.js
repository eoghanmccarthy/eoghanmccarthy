import React from "react";
import { func, number } from "prop-types";
import { css } from "@emotion/core";

const styles = ({ zIndex }) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: ${zIndex};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const DialogOverlay = ({ children, zIndex = 10000, closeDialog }) => {
  return (
    <div
      css={styles({ zIndex })}
      className={"ui-dialog-overlay"}
      onClick={closeDialog}
    >
      {children}
    </div>
  );
};

export default DialogOverlay;

DialogOverlay.propTypes = {
  zIndex: number,
  closeDialog: func.isRequired,
};
