import React from "react";

import Button from "components/navigation/button";
import List from "components/navigation/list";

const Modal: React.FunctionComponent<{ toggleVisibility: () => void }> = ({
  toggleVisibility
}) => {
  return (
    <div className="nav-global__modal">
      <List toggleVisibility={toggleVisibility} />
      <Button buttonClass="close" onClick={toggleVisibility} />
    </div>
  );
};

export default Modal;
