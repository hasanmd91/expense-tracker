import React, { useContext } from "react";
import { GlobalContext } from "../context/Globalstate";
import Transection from "./Transection";

const Transectionlist = () => {
  const { transection } = useContext(GlobalContext);

  return (
    <>
      <h3> History</h3>
      <ul className="list">
        {transection.map((transections) => {
          return (
            <Transection transections={transections} key={transections.id} />
          );
        })}
      </ul>
    </>
  );
};

export default Transectionlist;
