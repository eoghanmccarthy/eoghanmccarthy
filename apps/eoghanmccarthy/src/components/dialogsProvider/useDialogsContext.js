import { useContext } from "react";

import { DialogsContext } from "./index";

export const useDialogsContext = (component) => {
  const context = useContext(DialogsContext);
  if (!context) {
    throw new Error(
      `Must be rendered within the DialogsProvider component. Error occurred in the ${component} component.`
    );
  }

  return context;
};
