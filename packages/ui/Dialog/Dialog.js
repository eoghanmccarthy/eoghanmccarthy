import * as React from "react";
import { createPortal } from "react-dom";
import { func, bool, number, node } from "prop-types";
import FocusLock from "react-focus-lock";
import cx from "classnames";
import { css } from "@emotion/core";

const styles = ({ maxWidth }) => css`
  position: relative;
  width: 100%;
  max-width: ${maxWidth}px;
  max-height: calc(100vh - 140px);
  padding: 0 30px;
  background: transparent;
  border-radius: 8px;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
    width: 0;
    background: transparent;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &:focus {
    outline: none;
  }
`;

import DialogOverlay from "./DialogOverlay";

const attachToNode = document.getElementById("root");

const Dialog = ({
  children,
  attachToNode = attachToNode,
  bypassFocusLock = false,
  className,
  zIndex = 10000,
  maxWidth = 720,
  isOpen,
  closeDialog,
  ...rest
}) => {
  const handleClick = (e) => {
    e.stopPropagation();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      closeDialog();
    }
  };

  return isOpen
    ? createPortal(
        <FocusLock returnFocus disabled={bypassFocusLock}>
          <DialogOverlay zIndex={zIndex} closeDialog={closeDialog}>
            <div
              tabIndex={"-1"}
              css={styles({ maxWidth })}
              className={cx("ui-dialog", { "is-open": isOpen }, className)}
              onClick={handleClick}
              onKeyDown={handleKeyDown}
              {...rest}
            >
              {children}
            </div>
          </DialogOverlay>
        </FocusLock>,
        attachToNode
      )
    : null;
};
export default Dialog;

Dialog.propTypes = {
  attachToNode: node,
  bypassFocusLock: bool,
  zIndex: number,
  maxWidth: number,
  isOpen: bool.isRequired,
  closeDialog: func.isRequired,
};
