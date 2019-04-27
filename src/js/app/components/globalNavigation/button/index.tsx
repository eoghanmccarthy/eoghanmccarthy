import React from "react";
import classNames from "classnames";

import { Button } from "eoghandotio-ui";

const NavButton: React.FunctionComponent<{
  addClass?: string;
  onClick: () => void;
  colour?: string;
  tier?: string;
}> = ({
  addClass = undefined,
  onClick = null,
  colour = "#666666",
  tier = "contained"
}) => {
  const _className = classNames("btn__toggle-nav-global", addClass);

  return (
    <Button
      className={_className}
      onClick={onClick}
      colour={colour}
      tier={tier}
      shape={"circle"}
    >
      <span />
      <span />
      <span />
    </Button>
  );
};

export default NavButton;
