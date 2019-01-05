import React, { Fragment, useState } from "react";

import ModalOverlay from "components/modalOverlay";
import Modal from "components/globalNavigation/modal";
import NavButton from "components/globalNavigation/button";

const GlobalNavigation: React.FunctionComponent<{}> = () => {
  const [isVisible, toggleVisibility] = useState(false);

  const _toggleVisibility = () => {
    toggleVisibility(!isVisible);
  };

  return (
    <Fragment>
      <NavButton addClass="open" onClick={_toggleVisibility} />
      <ModalOverlay isVisible={isVisible}>
        <Modal isVisible={isVisible} toggleVisibility={_toggleVisibility} />
      </ModalOverlay>
    </Fragment>
  );
};

export default GlobalNavigation;
