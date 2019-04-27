import React from "react";
import classNames from "classnames";

import { Button } from "eoghandotio-ui";

const LightboxButton: React.FunctionComponent<{
  addClass?: string;
  onClick: () => void;
  colour?: string;
}> = ({ addClass = undefined, onClick, colour = undefined }) => {
  const _className = classNames("btn__lightbox", addClass);

  return (
    <Button
      className={_className}
      onClick={onClick}
      colour={"#333333"}
      shape={"circle"}
    >
      <span />
      <span />
    </Button>
  );
};

export default LightboxButton;
