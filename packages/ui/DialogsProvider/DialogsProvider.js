import React, {
  createContext,
  useReducer,
  useEffect,
  useMemo,
  isValidElement,
} from "react";
import { useLocation } from "react-router";

import { generateId } from "../utils";

import Blanket from "../Blanket";

export const DialogsContext = createContext();

const initialState = {};

const reducer = (state, action) => {
  switch (action.type) {
    case "open":
      return { ...state, [action.payload.name]: { ...action.payload.props } };
    case "close":
      const { [action.payload.name]: cleared, ...rest } = { ...state };
      return { ...rest };
    case "clear":
      return initialState;
    default:
      return state;
  }
};

const DialogsProvider = ({ children }) => {
  const location = useLocation();
  const [state, dispatch] = useReducer(reducer, initialState);

  const elements = useMemo(() => {
    if (Object.keys(state).length > 0) {
      return Object.entries(state).map(([name, props = {}]) => {
        const { Component } = props;

        if (!isValidElement(Component)) {
          return null;
        }

        const commonProps = {
          key: name,
          close: () => dispatch({ type: "close", payload: { name } }),
        };

        return React.cloneElement(Component, { ...commonProps });
      });
    }
  }, [state]);

  useEffect(() => {
    if (location) {
      dispatch({ type: "clear" });
    }
  }, [location]);

  return (
    <>
      <DialogsContext.Provider
        value={{
          state,
          open: (Component, id) => {
            id = id ?? generateId();

            dispatch({
              type: "open",
              payload: { name: id, props: { Component } },
            });

            return id;
          },
          close: (name) => dispatch({ type: "close", payload: { name } }),
          clear: () => dispatch({ type: "clear" }),
        }}
      >
        {children}
      </DialogsContext.Provider>
      {elements || null}
      {Boolean(elements) ? <Blanket /> : null}
    </>
  );
};

export default DialogsProvider;
