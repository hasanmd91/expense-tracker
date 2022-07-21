import React, { useContext } from "react";
import { GlobalContext } from "../context/Globalstate";

const Balance = () => {
  const { transection } = useContext(GlobalContext);
  const amounts = transection.map((transectios) => transectios.amount);
  const Total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <>
      <h4> Your balance</h4>
      <h1 id="balance"> ${Total}</h1>
    </>
  );
};

export default Balance;
