import React, { Fragment, useState, lazy, Suspense } from "react";

const ModalOverlay = lazy(() => import("components/modalOverlay"));
const Modal = lazy(() => import("components/globalNavigation/modal"));
import NavButton from "components/globalNavigation/button";

const GlobalNavigation: React.FunctionComponent<{}> = () => {
  const [isVisible, toggleVisibility] = useState(false);

  const _toggleVisibility = () => {
    toggleVisibility(!isVisible);
  };

  return (
    <Fragment>
      <NavButton addClass="open" onClick={_toggleVisibility} />
      <Suspense fallback={null}>
        <ModalOverlay isVisible={isVisible}>
          <Modal isVisible={isVisible} toggleVisibility={_toggleVisibility} />
        </ModalOverlay>
      </Suspense>
    </Fragment>
  );
};

export default GlobalNavigation;
