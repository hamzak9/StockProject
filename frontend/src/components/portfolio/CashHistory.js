import classes from "./CashHistory.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
// const cashOrders = [
//   {
//     amount: 333,
//     date: new Date("2023-08-25"),
//     type: "deposit",
//   },
//   {
//     amount: 2222,
//     date: new Date("2023-08-15"),
//     type: "withdraw",
//   },
//   {
//     amount: 333,
//     date: new Date("2023-08-25"),
//     type: "deposit",
//   },
//   {
//     amount: 2222,
//     date: new Date("2023-08-15"),
//     type: "withdraw",
//   },
//   {
//     amount: 333,
//     date: new Date("2023-08-25"),
//     type: "deposit",
//   },
//   {
//     amount: 2222,
//     date: new Date("2023-08-15"),
//     type: "withdraw",
//   },
// ];

const CashHistory = () => {
  const [cashHistory, setCashHistory] = useState([]);
  // ex  {
  //     amount: 2222,
  //     date: new Date("2023-08-15"),
  //     type: "withdraw",
  //   },
  useEffect(() => {
    axios
      .get("http://localhost:8080/all cash deposit,withdraw history")
      .then((response) => {
        console.log(response.data);
        setCashHistory(response.data);
      });
  }, []);

  return (
    <div className={classes.cashorder}>
      <p>Cash Transacion History</p>
      <div>
        <table>
          <thead>
            <tr>
              <th>Amount</th>
              <th>Type</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {cashHistory.map((cash) => (
              <tr>
                <td>${cash.amount}</td>
                <td>{cash.type}</td>
                <td>{cash.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CashHistory;
