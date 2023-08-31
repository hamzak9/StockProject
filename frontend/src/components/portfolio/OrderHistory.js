import classes from "./OrderHistory.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
// const orders = [
//   {
//     ticker: "AAPL",
//     price: 222,
//     qty: 5,
//     date: new Date("2023-08-25"),
//     type: "buy",
//   },
//   {
//     ticker: "AAPL",
//     price: 222,
//     qty: 5,
//     date: new Date("2023-08-15"),
//     type: "sell",
//   },
//   {
//     ticker: "AAPL",
//     price: 222,
//     qty: 5,
//     date: new Date("2023-08-05"),
//     type: "buy",
//   },
//   {
//     ticker: "AAPL",
//     price: 222,
//     qty: 5,
//     date: new Date("2023-07-25"),
//     type: "buy",
//   },
//   {
//     ticker: "AAPL",
//     price: 222,
//     qty: 5,
//     date: new Date("2023-07-15"),
//     type: "sell",
//   },
//   {
//     ticker: "AAPL",
//     price: 222,
//     qty: 5,
//     date: new Date("2023-07-05"),
//     type: "buy",
//   },
//   {
//     ticker: "AAPL",
//     price: 222,
//     qty: 5,
//     date: new Date("2023-06-25"),
//     type: "buy",
//   },
//   {
//     ticker: "AAPL",
//     price: 222,
//     qty: 5,
//     date: new Date("2023-06-15"),
//     type: "sell",
//   },
//   {
//     ticker: "AAPL",
//     price: 222,
//     qty: 5,
//     date: new Date("2023-05-25"),
//     type: "buy",
//   },
//   {
//     ticker: "AAPL",
//     price: 222,
//     qty: 5,
//     date: new Date("2023-05-15"),
//     type: "buy",
//   },
// ];

const OrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState([]);
  // ex   {
  //     ticker: "AAPL",
  //     price: 222,
  //     quantity: 5,
  //     date: new Date("2023-05-15"),
  //     type: "buy",
  //   },
  useEffect(() => {
    axios
      .get("http://localhost:8080/all stock order history api url")
      .then((response) => {
        console.log(response.data);
        setOrderHistory(response.data);
      });
  }, []);

  return (
    <div className={classes.order}>
      <p>Stock Order History</p>
      <div>
        <table>
          <thead>
            <tr>
              <th>Ticker</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Type</th>
              <th>Date & TIme</th>
            </tr>
          </thead>
          <tbody>
            {orderHistory.map((order) => (
              <tr>
                <td>{order.ticker}</td>
                <td>${order.price}</td>
                <td>{order.quantity}</td>
                <td>{order.type}</td>
                <td>{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderHistory;
