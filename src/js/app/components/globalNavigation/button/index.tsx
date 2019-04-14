import React from "react";

import { Button } from "eoghandotio-ui";

const NavButton: React.FunctionComponent<{
  addClass?: string;
  onClick: () => void;
}> = ({ addClass = "", onClick = null }) => {
  return (
    <Button
      className={`btn__round btn__toggle-nav-global ${addClass}`}
      onClick={onClick}
    >
      <span />
      <span />
      <span />
    </Button>
  );
};

export default NavButton;
