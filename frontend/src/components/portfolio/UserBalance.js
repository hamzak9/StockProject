import { useState, useEffect } from "react";
import classes from "./UserBalance.module.css";
import axios from "axios";

const UserBalance = () => {
  const [cashBalance, setCashBalance] = useState(0);
  const [totalStockAmount, setTotalStockAmount] = useState(0);
  const [totalRateOfReturn, setTotalRateOfReturn] = useState(0);
  useEffect(() => {
    axios
      .get("http://localhost:8080/all stock price * quantity sum api url")
      .then((response) => {
        console.log(response.data);
        setTotalStockAmount(response.data);
      });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8080/cash balance api url").then((response) => {
      console.log(response.data);
      setCashBalance(response.data);
    });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8080/total rate of return of stocks api url")
      .then((response) => {
        console.log(response.data);
        setTotalRateOfReturn(response.data);
      });
  }, []);
  return (
    <section className={classes.balance}>
      <div>UserName</div>
      <div>
        Cash Balance: <section>${cashBalance}</section>
      </div>
      <div>
        Total stock value: <section>${totalStockAmount}</section>
        <section>{totalRateOfReturn}%</section>
      </div>
      <div>
        Current total net:
        <section> ${+totalStockAmount + +cashBalance}</section>
      </div>
      <button>Deposit Cash</button>
      <button>Withdraw Cash</button>
    </section>
  );
};

export default UserBalance;
