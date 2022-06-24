import * as React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { css } from "@stitches/react";

const styles = css({
  display: "block",
  variants: {
    size: {
      sm: {
        width: "4px",
        height: `4px`,
        minWidth: "4px",
        minHeight: `4px`,
      },
      md: {
        width: "8px",
        height: `8px`,
        minWidth: "8px",
        minHeight: `8px`,
      },
    },
  },
});

const Spacer = ({ size = "sm" }) => {
  return <span className={cx("ui-spacer", styles({ size }).toString())} />;
};

export default Spacer;

Spacer.propTypes = {
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  axis: PropTypes.oneOf(["vertical", "horizontal"]),
};
