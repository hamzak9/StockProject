import classes from "./CashHistory.module.css";

const cashOrders = [
  {
    amount: 333,
    date: new Date("2023-08-25"),
    type: "deposit",
  },
  {
    amount: 2222,
    date: new Date("2023-08-15"),
    type: "withdraw",
  },
  {
    amount: 333,
    date: new Date("2023-08-25"),
    type: "deposit",
  },
  {
    amount: 2222,
    date: new Date("2023-08-15"),
    type: "withdraw",
  },
  {
    amount: 333,
    date: new Date("2023-08-25"),
    type: "deposit",
  },
  {
    amount: 2222,
    date: new Date("2023-08-15"),
    type: "withdraw",
  },
];
const CashHistory = () => {
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
            <tr>
              <td>$333</td>
              <td>Deposit</td>
              <td>2022-05-01T10:44:39.369Z</td>
            </tr>
            <tr>
              <td>$222</td>
              <td>Withdraw</td>
              <td>2022-05-01T10:44:39.369Z</td>
            </tr>
            <tr>
              <td>$333</td>
              <td>Deposit</td>
              <td>2022-05-01T10:44:39.369Z</td>
            </tr>
            <tr>
              <td>$222</td>
              <td>Withdraw</td>
              <td>2022-05-01T10:44:39.369Z</td>
            </tr>
            <tr>
              <td>$333</td>
              <td>Deposit</td>
              <td>2022-05-01T10:44:39.369Z</td>
            </tr>
            <tr>
              <td>$222</td>
              <td>Withdraw</td>
              <td>2022-05-01T10:44:39.369Z</td>
            </tr>
            <tr>
              <td>$333</td>
              <td>Deposit</td>
              <td>2022-05-01T10:44:39.369Z</td>
            </tr>
            <tr>
              <td>$222</td>
              <td>Withdraw</td>
              <td>2022-05-01T10:44:39.369Z</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CashHistory;
