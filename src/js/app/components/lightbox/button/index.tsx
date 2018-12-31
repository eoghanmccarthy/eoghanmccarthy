import React from "react";

import Button from "components/button";

const LightboxButton: React.FunctionComponent<{
  disabled?: boolean | false;
  addClass?: string;
  onClick: () => void;
}> = ({ disabled, addClass, onClick }) => (
  <Button
    disabled={disabled}
    addClass={`btn__round btn__lightbox ${addClass}`}
    onClick={onClick}
  >
    <span />
    <span />
  </Button>
);

export default LightboxButton;
