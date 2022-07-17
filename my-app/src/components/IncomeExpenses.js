import React from "react";

const IncomeExpenses = () => {
  return (
    <div className="inc-exp-container ">
      <div id="money" className="moneyplus">
        <h4>Income</h4>
        <p> +$0.00</p>
      </div>

      <div id="money" className="moneyminus">
        <h4> Expense </h4>
        <p> -$0.00</p>{" "}
      </div>
    </div>
  );
};

export default IncomeExpenses;
