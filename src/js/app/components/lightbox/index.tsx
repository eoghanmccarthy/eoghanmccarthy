import React, { useState } from "react";

import { Button, Icons } from "eoghandotio-ui";
import Viewer from "components/lightbox/viewer";

import { LightboxContext } from "app/context";

const Lightbox: React.FunctionComponent<{ children?: JSX.Element }> = ({
  children
}) => {
  const [isVisible, toggleVisibility] = useState(false);
  const [data, setData] = useState([]);
  const [initialIndex, setInitialIndex] = useState(0);

  const _openLightbox = async (d: Array<object>, i: number) => {
    await setData(d);
    await setInitialIndex(i);
    toggleVisibility(!isVisible);
  };

  const _closeLightbox = async () => {
    await toggleVisibility(!isVisible);
    setInitialIndex(0);
    setData([]);
  };

  return (
    <LightboxContext.Provider
      value={{
        openLightbox: _openLightbox
      }}
    >
      {isVisible ? (
        <div className={"lightbox"}>
          <Button
            className={"btn__lightbox close"}
            onClick={_closeLightbox}
            colour={"#333333"}
            shape={"circle"}
          >
            <Icons.Close />
          </Button>
          <Viewer data={data} initialIndex={initialIndex} />
        </div>
      ) : null}
      {children}
    </LightboxContext.Provider>
  );
};

export default Lightbox;
