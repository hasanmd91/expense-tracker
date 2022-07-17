import React, { useState } from "react";

const Addtransection = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  return (
    <>
      <h3> Add new transection </h3>
      <form>
        <div className="form-control">
          <label htmlFor="text"> Text </label>
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
            placeholder=" Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      </form>
      <button className=" btn"> Add transection </button>
    </>
  );
};

export default Addtransection;
