import { useEffect, useState } from "react";
import classes from "./ListStocks.module.css";
import axios from "axios";

const ListStocks = () => {
  const [stocks, setStocks] = useState([]);
  // ex {id: 1, price: 10, ticker: AMZN, quantity: 3, portfolio_id: 1}

  useEffect(() => {
    axios({
      url: "http://localhost:8080/api/portfolio/getPortfolio",
    }).then((response) => {
      return setStocks(response.data);
    });
  }, []);

  console.log(stocks);

  const findCurrentPrice = (ticker) => {
    // const stockInfo = axios
    //   .get(`http://localhost:8080/api/stock/viewstock/${ticker}`)
    //   .then((response) => {
    //     return response.data;
    //   });
    // const str = stockInfo[1];
    // console.log(str);
    // const startIdx = str.search(/[0-9]/);
    // const price = str.substring(startIdx, str.length);
    // parseFloat(price);
    //parseFloat(price).toFixed(2);
    return 150;
  };

  const gainerStocks = () => {
    let gainers = stocks.filter(
      (stock) => stock.price <= +findCurrentPrice(stock.ticker)
    ); // extract only gainers or equal value stocks

    gainers.map(
      (stock) => (stock["total"] = (stock.price * stock.quantity).toFixed(2))
    );
    // add total amount to stock obj

    gainers.map(
      (stock) =>
        (stock["rate"] = (
          (+findCurrentPrice(stock.ticker) / +stock.price) * 100 -
          100
        ).toFixed(2))
    ); // add rate properties to stock obj

    gainers = gainers.sort((a, b) => {
      return b.rate - a.rate;
    });

    return gainers;
  };
  const loserStocks = () => {
    let losers = stocks.filter(
      (stock) => stock.price > findCurrentPrice(stock.ticker)
    );

    losers.map(
      (stock) => (stock["total"] = (stock.price * stock.quantity).toFixed(2))
    );

    losers.map(
      (stock) =>
        (stock["rate"] = (
          (+findCurrentPrice(stock.ticker) / +stock.price) * 100 -
          100
        ).toFixed(2))
    );
    console.log(losers);
    losers = losers.sort((a, b) => {
      return a.rate - b.rate;
    });
    console.log(losers);
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
