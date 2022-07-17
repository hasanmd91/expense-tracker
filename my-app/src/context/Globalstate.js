import { createContext, useReducer } from "react";

// initial state

const intialstate = {
  transection: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 1, text: "salary", amount: 300 },
    { id: 1, text: "Book", amount: -20 },
    { id: 1, text: "camera", amount: -150 },
  ],
};

// create context

export const GlobalContext = createContext(intialstate);

//provider component

export const Globalprovider = ({ children }) => {};
