import classes from "./OrderHistory.module.css";

const orders = [
  {
    ticker: "AAPL",
    price: 222,
    qty: 5,
    date: new Date("2023-08-25"),
    type: "buy",
  },
  {
    ticker: "AAPL",
    price: 222,
    qty: 5,
    date: new Date("2023-08-15"),
    type: "sell",
  },
  {
    ticker: "AAPL",
    price: 222,
    qty: 5,
    date: new Date("2023-08-05"),
    type: "buy",
  },
  {
    ticker: "AAPL",
    price: 222,
    qty: 5,
    date: new Date("2023-07-25"),
    type: "buy",
  },
  {
    ticker: "AAPL",
    price: 222,
    qty: 5,
    date: new Date("2023-07-15"),
    type: "sell",
  },
  {
    ticker: "AAPL",
    price: 222,
    qty: 5,
    date: new Date("2023-07-05"),
    type: "buy",
  },
  {
    ticker: "AAPL",
    price: 222,
    qty: 5,
    date: new Date("2023-06-25"),
    type: "buy",
  },
  {
    ticker: "AAPL",
    price: 222,
    qty: 5,
    date: new Date("2023-06-15"),
    type: "sell",
  },
  {
    ticker: "AAPL",
    price: 222,
    qty: 5,
    date: new Date("2023-05-25"),
    type: "buy",
  },
  {
    ticker: "AAPL",
    price: 222,
    qty: 5,
    date: new Date("2023-05-15"),
    type: "buy",
  },
];

const OrderHistory = () => {
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
            <tr>
              <td>AAPL</td>
              <td>$123</td>
              <td>6</td>
              <td>Sell</td>
              <td>2022-05-01T10:44:39.369Z</td>
            </tr>
            <tr>
              <td>AAPL</td>
              <td>$123</td>
              <td>6</td>
              <td>Buy</td>

              <td>2022-05-01T10:44:39.369Z</td>
            </tr>
            <tr>
              <td>AAPL</td>
              <td>$123</td>
              <td>6</td>
              <td>Sell</td>

              <td>2022-05-01T10:44:39.369Z</td>
            </tr>
            <tr>
              <td>AAPL</td>
              <td>$123</td>
              <td>6</td>
              <td>Buy</td>

              <td>2022-05-01T10:44:39.369Z</td>
            </tr>
            <tr>
              <td>AAPL</td>
              <td>$123</td>
              <td>6</td>
              <td>Buy</td>

              <td>2022-05-01T10:44:39.369Z</td>
            </tr>
            <tr>
              <td>AAPL</td>
              <td>$123</td>
              <td>6</td>
              <td>Buy</td>

              <td>2022-05-01T10:44:39.369Z</td>
            </tr>
            <tr>
              <td>AAPL</td>
              <td>$123</td>
              <td>6</td>
              <td>Buy</td>

              <td>2022-05-01T10:44:39.369Z</td>
            </tr>
            <tr>
              <td>AAPL</td>
              <td>$123</td>
              <td>6</td>
              <td>Buy</td>

              <td>2022-05-01T10:44:39.369Z</td>
            </tr>
            <tr>
              <td>AAPL</td>
              <td>$123</td>
              <td>6</td>
              <td>Buy</td>

              <td>2022-05-01T10:44:39.369Z</td>
            </tr>
            <tr>
              <td>AAPL</td>
              <td>$123</td>
              <td>6</td>
              <td>Buy</td>

              <td>2022-05-01T10:44:39.369Z</td>
            </tr>
            <tr>
              <td>AAPL</td>
              <td>$123</td>
              <td>6</td>
              <td>Buy</td>

              <td>2022-05-01T10:44:39.369Z</td>
            </tr>
            <tr>
              <td>AAPL</td>
              <td>$123</td>
              <td>6</td>
              <td>Buy</td>

              <td>2022-05-01T10:44:39.369Z</td>
            </tr>
            <tr>
              <td>AAPL</td>
              <td>$123</td>
              <td>6</td>
              <td>Buy</td>

              <td>2022-05-01T10:44:39.369Z</td>
            </tr>
            <tr>
              <td>AAPL</td>
              <td>$123</td>
              <td>6</td>
              <td>Buy</td>

              <td>2022-05-01T10:44:39.369Z</td>
            </tr>
            <tr>
              <td>AAPL</td>
              <td>$123</td>
              <td>6</td>
              <td>Buy</td>

              <td>2022-05-01T10:44:39.369Z</td>
            </tr>
            <tr>
              <td>AAPL</td>
              <td>$123</td>
              <td>6</td>
              <td>Buy</td>

              <td>2022-05-01T10:44:39.369Z</td>
            </tr>
            <tr>
              <td>AAPL</td>
              <td>$123</td>
              <td>6</td>
              <td>Buy</td>

              <td>2022-05-01T10:44:39.369Z</td>
            </tr>
            <tr>
              <td>AAPL</td>
              <td>$123</td>
              <td>6</td>
              <td>Buy</td>

              <td>2022-05-01T10:44:39.369Z</td>
            </tr>
            <tr>
              <td>AAPL</td>
              <td>$123</td>
              <td>6</td>
              <td>Buy</td>

              <td>2022-05-01T10:44:39.369Z</td>
            </tr>
            <tr>
              <td>AAPL</td>
              <td>$123</td>
              <td>6</td>
              <td>Buy</td>

              <td>2022-05-01T10:44:39.369Z</td>
            </tr>
            <tr>
              <td>AAPL</td>
              <td>$123</td>
              <td>6</td>
              <td>Buy</td>

              <td>2022-05-01T10:44:39.369Z</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderHistory;
