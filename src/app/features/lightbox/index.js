import React from "react";
import { useTransition, animated, config } from "react-spring";
import "./styles.scss";

import { Button } from "@eoghanmccarthy/ui";
import Viewer from "./components/viewer";

const Lightbox = ({ currentIndex, setCurrentIndex, isOpen, list, onClose }) => {
  const transitions = useTransition(isOpen, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.stiff
  });

  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <animated.div key={key} style={props} className={"lightbox"}>
          <Button
            size={"xl"}
            shape={"circle"}
            className={"btn__lightbox close"}
            onClick={onClose}
            colour={"#333333"}
          />
          <Viewer
            list={list}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        </animated.div>
      )
  );
};

export default Lightbox;
