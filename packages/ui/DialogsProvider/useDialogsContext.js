import { useContext } from "react";

import { DialogsContext } from "./DialogsProvider";

const useDialogsContext = (component) => {
  const context = useContext(DialogsContext);
  if (!context) {
    throw new Error(
      `Must be rendered within the DialogProvider component. Error occurred in the ${component} component.`
    );
  }

  return context;
};

export default useDialogsContext;
