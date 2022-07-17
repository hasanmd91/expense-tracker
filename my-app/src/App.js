import React from "react";
import Header from "./components/Header";
import "./App.css";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import Transectionlist from "./components/Transectionlist";
import Addtransection from "./components/Addtransection";

const App = () => {
  return (
    <>
      <Header title={"Expense tracker "} />

      <div className="container">
        <Balance />
        <IncomeExpenses />
        <Transectionlist />
        <Addtransection />
      </div>
    </>
  );
};

export default App;
