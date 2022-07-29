import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initial state

const intialstate = {
  transection: [
    {
      id: 1,
      text: "salary",
      amount: 123,
    },
  ],
};

// create context

export const GlobalContext = createContext(intialstate);

//provider component

export const Globalprovider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, intialstate);

  // Actions
  const deleteTransection = (id) => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  };

  const addTransections = (transection) => {
    console.log(transection);
    dispatch({
      type: "ADD",
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
