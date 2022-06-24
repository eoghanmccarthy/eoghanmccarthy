import React, { createContext, useReducer, useEffect, useMemo } from "react";
import { useLocation } from "react-router";

import { reducer, initialState } from "./reducer";

import { Blanket } from "@eoghanmccarthy/ui";

export const DialogsContext = createContext();
import { registry } from "../../modals/registry";

const DialogsProvider = ({ children }) => {
  const location = useLocation();

  const [state, dispatch] = useReducer(reducer, initialState);

  const toRenderDialogs = useMemo(() => {
    if (Object.keys(state).length > 0) {
      const toRender = [];

      Object.entries(state).forEach(([name, props = {}], i) => {
        if (typeof name !== "string") {
          const msg = `Provided dialog "name" must be a string. Received: ${JSON.stringify(
            name
          )}`;

          if (__DEV__) {
            throw new Error(msg);
          } else {
            console.error(msg);
          }
        }

        const dialog = registry[name];

        if (__DEV__) {
          if (!dialog) {
            // Check if dialog has been added to dialog registry
            // and throw error if not found.
            throw new Error(
              `Dialog "${name}" was not found in the dialog registry or the passed "name" is incorrect.`
            );
          }
        }

        const commonProps = {
          key: name,
          close: () => dispatch({ type: "close", payload: { name } }),
          dialogProps: {
            id: `dialog-${name}`,
            testId: `dialog-${name}`,
            disableBackdropClick: true,
            size: "medium",
          },
        };

        const { Component, args = {} } = dialog;

        toRender.push(<Component {...args} {...commonProps} {...props} />);

        if (__DEV__) {
          console.log({ name, props, ...commonProps, location });
          // can log dialog state here
          // send to logRocket?
        }
      });

      return toRender;
    }
  }, [state]);

  useEffect(() => {
    if (location) {
      dispatch({ type: "clear" });
    }
  }, [location]);

  return (
    <>
      {toRenderDialogs || null}
      {Boolean(toRenderDialogs) ? <Blanket /> : null}
      <DialogsContext.Provider
        value={{
          state,
          open: (name, props = {}) =>
            dispatch({ type: "open", payload: { name, props } }),
          close: (name, props = {}) =>
            dispatch({ type: "close", payload: { name, props } }),
          clear: () => dispatch({ type: "clear" }),
        }}
      >
        {children}
      </DialogsContext.Provider>
    </>
  );
};

export default DialogsProvider;
