import React, {
  createContext,
  useReducer,
  useMemo,
  isValidElement,
} from "react";

import { generateId } from "../utils";

//import Blanket from "../Blanket";

export const DialogsContext = createContext();

const initialState = {};

const reducer = (state, action) => {
  switch (action.type) {
    case "open":
      return { ...state, [action.payload.id]: { ...action.payload.props } };
    case "close":
      const { [action.payload.id]: cleared, ...rest } = { ...state };
      return { ...rest };
    case "clear":
      return initialState;
    default:
      return state;
  }
};

const DialogsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const elements = useMemo(() => {
    if (Object.keys(state).length > 0) {
      return Object.entries(state).map(([id, props = {}]) => {
        const { Component } = props;

        if (!isValidElement(Component)) {
          return null;
        }

        const commonProps = {
          key: id,
          close: () => dispatch({ type: "close", payload: { id } }),
        };

        return React.cloneElement(Component, { ...commonProps });
      });
    }
  }, [state]);

  return (
    <>
      <DialogsContext.Provider
        value={{
          state,
          open: (Component, id) => {
            id = id ?? generateId();

            dispatch({
              type: "open",
              payload: { id, props: { Component } },
            });

            return {id, close: () => dispatch({ type: "close", payload: { id } })};
          },
          close: (id) => dispatch({ type: "close", payload: { id } }),
          clear: () => dispatch({ type: "clear" }),
        }}
      >
        {children}
      </DialogsContext.Provider>
      {elements || null}
      {/*{Boolean(elements) ? <Blanket /> : null}*/}
    </>
  );
};

export default DialogsProvider;
