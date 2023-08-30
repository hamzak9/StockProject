import { useEffect, useState } from "react";
import classes from "./ListStocks.module.css";
import axios from "axios";

const ListStocks = () => {
  const [stocks, setStocks] = useState([]);
  // ex {id: 1, price: 10, ticker: AMZN, quantity: 3, portfolio_id: 1}

  useEffect(() => {
    axios.get("http://localhost:8080/stock lsit api url").then((response) => {
      console.log(response.data);
      setStocks(response.data);
    });
  }, []);

  const findCurrentPrice = (ticker) => {
    const stockInfo = axios.get(
      `http://localhost:8080/api/stock/viewStock/${ticker}`
    );
    console.log(stockInfo);
    return +stockInfo.regularMarketPrice;
  };

  const gainerStocks = () => {
    let gainers = stocks.filter(
      (stock) => stock.price >= +findCurrentPrice(stock.ticker)
    ); // extract only gainers or equal value stocks

    gainers.map((stock) => (stock["total"] = stock.price * stock.quantity));
    // add total amount to stock obj

    gainers.map(
      (stock) =>
        (stock["rate"] =
          ((+findCurrentPrice(stock.ticker) - +stock.price) / +stock.price) *
          100)
    ); // add rate properties to stock obj

    gainers.sort((a, b) => {
      if (a.rate > b.rate) return 1;
      else if (a.rate < b.rate) return -1;
      else return 0;
    }); // sort in rate order

    return gainers;
  };
  const loserStocks = () => {
    let losers = stocks.filter(
      (stock) => stock.price < findCurrentPrice(stock.ticker)
    );

    losers.map((stock) => (stock["total"] = stock.price * stock.quantity));

    losers.map(
      (stock) =>
        (stock["rate"] =
          ((+stock.price - +findCurrentPrice(stock.ticker)) / +stock.price) *
          -100)
    );

    losers.sort((a, b) => {
      if (a.rate < b.rate) return 1;
      else if (a.rate > b.rate) return -1;
      else return 0;
    });

    return losers;
  };
  return (
    // these are dummy values
    <section className={classes.stocklist}>
      <nav>
        <h1>TOP Gainers from you portfolio</h1>
        <div className={classes["tbl-header"]}>
          <table cellPadding="0" cellSpacing="0" border="0">
            <thead>
              <tr>
                <th>Ticker</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Change %</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className={classes["tbl-content"]}>
          <table cellPadding="0" cellSpacing="0" border="0">
            <tbody>
              {gainerStocks().map((stock) => (
                <tr>
                  <td>{stock.ticker}</td>
                  <td>${stock.price}</td>
                  <td>{stock.quantity}</td>
                  <td>${stock.total}</td>
                  <td>{stock.rate}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h1>TOP Losers from you portfolio</h1>
        <div className={classes["tbl-header"]}>
          <table cellPadding="0" cellSpacing="0" border="0">
            <thead>
              <tr>
                <th>Ticker</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Change %</th>
              </tr>
            </thead>
          </table>
        </div>
        <div></div>
        <div className={classes["tbl-content"]}>
          <table cellPadding="0" cellSpacing="0" border="0">
            <tbody>
              {loserStocks().map((stock) => (
                <tr>
                  <td>{stock.ticker}</td>
                  <td>${stock.price}</td>
                  <td>{stock.quantity}</td>
                  <td>${stock.total}</td>
                  <td>{stock.rate}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </nav>
    </section>
  );
};

export default ListStocks;
