import { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";

export const SIPTContext = createContext({
  state: initialState,
  dispatch: () => null,
});

export const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <SIPTContext.Provider value={{ state, dispatch }}>
      {children}
    </SIPTContext.Provider>
  );
};
