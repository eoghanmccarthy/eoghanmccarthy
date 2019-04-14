import React from "react";

import { Button } from "eoghandotio-ui";

const LightboxButton: React.FunctionComponent<{
  disabled?: boolean | false;
  addClass?: string;
  onClick: () => void;
}> = ({ disabled, addClass, onClick }) => (
  <Button
    disabled={disabled}
    className={`btn__round ${addClass}`}
    onClick={onClick}
  >
    <span />
    <span />
  </Button>
);

export default LightboxButton;
