import React, { useContext } from "react";
import { GlobalContext } from "../context/Globalstate";

const IncomeExpenses = () => {
  const { transection } = useContext(GlobalContext);

  const amounts = transection.map((transectios) => transectios.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0);

  return (
    <div className="inc-exp-container ">
      <div id="money" className="moneyplus">
        <h4>Income</h4>
        <p> +${income}</p>
      </div>

      <div id="money" className="moneyminus">
        <h4> Expense </h4>
        <p> -${expense}</p>{" "}
      </div>
    </div>
  );
};

export default IncomeExpenses;
