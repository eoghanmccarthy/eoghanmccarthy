import React, { useState, lazy, Suspense } from "react";

const Viewer = lazy(() => import("components/lightbox/viewer"));
import LightboxButton from "components/lightbox/button";

import { LightboxContext } from "app/context";

const Lightbox: React.FunctionComponent<{ children?: JSX.Element }> = ({
  children
}) => {
  const [isVisible, toggleVisibility] = useState(false);
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const _openLightbox = async (d: Array<object>, i: number) => {
    await setData(d);
    await setActiveIndex(i);
    toggleVisibility(!isVisible);
  };

  const _closeLightbox = async () => {
    await toggleVisibility(!isVisible);
    setActiveIndex(0);
    setData([]);
  };

  return (
    <LightboxContext.Provider
      value={{
        openLightbox: _openLightbox
      }}
    >
      {isVisible ? (
        <Suspense fallback={null}>
          <div className={"lightbox"}>
            <LightboxButton addClass={"close"} onClick={_closeLightbox} />
            <Viewer
              data={data}
              setActiveIndex={setActiveIndex}
              activeIndex={activeIndex}
            />
          </div>
        </Suspense>
      ) : null}

      {children}
    </LightboxContext.Provider>
  );
};

export default Lightbox;
