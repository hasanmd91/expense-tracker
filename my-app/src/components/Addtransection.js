import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/Globalstate";

const Addtransection = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransections } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransection = {
      id: Math.floor(Math.random() * 10000000),
      text,
      amount: +amount,
    };

    addTransections(newTransection);
  };

  return (
    <>
      <h3> Add new transection </h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter text...."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />{" "}
        </div>

        <div className=" form-control">
          <label htmlFor="amount">
            {" "}
            Amount <br />( negative: expense , positive : income )
          </label>
          <input
            type="number"
            placeholder=" Enter Amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button type="submit" className=" btn">
          {" "}
          Add transection{" "}
        </button>
      </form>
    </>
  );
};

export default Addtransection;
