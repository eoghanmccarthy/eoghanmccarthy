import React, { useState } from "react";

import { Button } from "@eoghanmccarthy/ui";
import Viewer from "./components/viewer";

import { LightboxContext } from "app/context";

const Lightbox = ({ children }) => {
  const [isVisible, toggleVisibility] = useState(false);
  const [data, setData] = useState([]);
  const [initialIndex, setInitialIndex] = useState(0);

  const handleOpen = async (d, i) => {
    await setData(d);
    await setInitialIndex(i);
    toggleVisibility(!isVisible);
  };

  const handleClose = async () => {
    await toggleVisibility(!isVisible);
    setInitialIndex(0);
    setData([]);
  };

  return (
    <LightboxContext.Provider
      value={{
        open: handleOpen
      }}
    >
      {isVisible ? (
        <div className={"lightbox"}>
          <Button
            className={"btn__lightbox close"}
            onClick={handleClose}
            colour={"#333333"}
            shape={"circle"}
          />
          <Viewer data={data} initialIndex={initialIndex} />
        </div>
      ) : null}
      {children}
    </LightboxContext.Provider>
  );
};

export default Lightbox;
