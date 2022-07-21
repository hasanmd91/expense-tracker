import React, { useContext } from "react";
import { GlobalContext } from "../context/Globalstate";

const Transection = ({ transections }) => {
  const { deleteTransection } = useContext(GlobalContext);

  const sign = transections.amount < 0 ? "-" : "+";
  return (
    <div>
      <li className="minus" key={transections.id}>
        {transections.text}{" "}
        <span>
          {" "}
          {sign}$ {Math.abs(transections.amount)}{" "}
        </span>{" "}
        <button
          className="delete-btn"
          onClick={() => deleteTransection(transections.id)}
        >
          {" "}
          x{" "}
        </button>
      </li>
    </div>
  );
};

export default Transection;
