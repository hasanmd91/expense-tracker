import React from "react";
import Header from "./components/Header";
import "./App.css";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import Transectionlist from "./components/Transectionlist";
import Addtransection from "./components/Addtransection";
import { Globalprovider } from "./context/Globalstate";

const App = () => {
  return (
    <>
      <Header title={"Expense tracker "} />

      <Globalprovider className="container">
        <Balance />
        <IncomeExpenses />
        <Transectionlist />
        <Addtransection />
      </Globalprovider>
    </>
  );
};

export default App;
