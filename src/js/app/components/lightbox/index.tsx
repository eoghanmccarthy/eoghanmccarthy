import React, { useState } from "react";

import Viewer from "components/lightbox/viewer";
import LightboxButton from "components/lightbox/button";

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
          <LightboxButton addClass={"close"} onClick={_closeLightbox} />
          <Viewer data={data} initialIndex={initialIndex} />
        </div>
      ) : null}

      {children}
    </LightboxContext.Provider>
  );
};

export default Lightbox;
