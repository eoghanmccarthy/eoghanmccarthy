import * as React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { css } from "@stitches/react";

const styles = css({
  display: "block",
  variants: {
    size: {
      4: {
        width: "4px",
        height: `4px`,
        minWidth: "4px",
        minHeight: `4px`,
      },
      8: {
        width: "8px",
        height: `8px`,
        minWidth: "8px",
        minHeight: `8px`,
      },
      16: {
        width: "16px",
        height: `16px`,
        minWidth: "16px",
        minHeight: `16px`,
      },
      32: {
        width: "32px",
        height: `32px`,
        minWidth: "32px",
        minHeight: `32px`,
      },
    },
  },
});

const Spacer = ({ size = 8 }) => {
  return <span className={cx("ui-spacer", styles({ size }).toString())} />;
};

export default Spacer;

Spacer.propTypes = {
  size: PropTypes.oneOf([4, 8, 16, 32]),
  axis: PropTypes.oneOf(["vertical", "horizontal"]),
};
