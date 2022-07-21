import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initial state

const intialstate = {
  transection: [],
};

console.log(intialstate);
// create context

export const GlobalContext = createContext(intialstate);

//provider component

export const Globalprovider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, intialstate);

  // Actions
  const deleteTransection = (id) => {
    dispatch({
      type: "DELETE_TRANSECTION",
      payload: id,
    });
  };

  const addTransections = (transection) => {
    dispatch({
      type: "ADD_TRANSECTION",
      payload: transection,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transection: state.transection,
        deleteTransection,
        addTransections,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
