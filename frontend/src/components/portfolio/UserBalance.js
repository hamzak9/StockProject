import { useState, useEffect } from "react";
import classes from "./UserBalance.module.css";
import axios from "axios";

const UserBalance = () => {
  const [cashBalance, setCashBalance] = useState("");
  const [totalStockAmount, setTotalStockAmount] = useState("");
  const [totalRateOfReturn, setTotalRateOfReturn] = useState("");
  const [cashInput, setCashInput] = useState("");

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

  const depositHandler = () => {
    if (+cashInput !== null && +cashInput !== undefined && +cashInput > 0) {
      let url = "http://localhost:8080/post cash deposit";
      const data = { amount: cashInput };
      axios.post(url, data);
    } else {
    }
    setCashInput("");
  };

  const withdrawHandler = () => {
    if (
      +cashInput !== null &&
      +cashInput !== undefined &&
      +cashInput > 0 &&
      +cashBalance >= +cashInput
    ) {
      let url = "http://localhost:8080/post cash withdraw";
      const data = { amount: cashInput };
      axios.post(url, data);
    }
    setCashInput("");
  };

  const cashNumHandler = (event) => {
    event.preventDefault();
    setCashInput(event.target.value);
  };

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
      <form>
        <input type="number" onChange={cashNumHandler} />
        <button onClick={depositHandler}>Deposit</button>
        <button onClick={withdrawHandler}>Withdraw</button>
      </form>
    </section>
  );
};

export default UserBalance;
