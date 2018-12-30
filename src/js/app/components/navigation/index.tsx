import React, { useState } from "react";

import Button from "components/navigation/button";
import Modal from "components/navigation/modal";

const Navigation: React.FunctionComponent<{}> = () => {
  const [isVisible, toggleVisibility] = useState(false);

  const _toggleVisibility = () => {
    toggleVisibility(!isVisible);
  };

  return (
    <div className="nav-global">
      <Button buttonClass="open" onClick={_toggleVisibility} />
      {isVisible && <Modal toggleVisibility={_toggleVisibility} />}
    </div>
  );
};

export default Navigation;
