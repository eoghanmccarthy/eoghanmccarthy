import React from "react";

import Button from "components/button";

const NavButton: React.FunctionComponent<{
  addClass?: string;
  onClick: () => void;
}> = ({ addClass, onClick }) => {
  return (
    <Button
      addClass={`btn__round btn__toggle-nav-global ${addClass}`}
      onClick={onClick}
    >
      <span />
      <span />
      <span />
    </Button>
  );
};

export default NavButton;
