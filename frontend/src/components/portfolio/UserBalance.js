import classes from "./UserBalance.module.css";

const UserBalance = () => {
  return (
    <section className={classes.balance}>
      <div>UserName</div>
      <div>
        Cash Balance: <section>$11111</section>
      </div>
      <div>
        Total invested net: <section>$111111</section>
      </div>
      <div>
        Current total net: <section>$222222</section>
      </div>
      <button>Buy Stocks</button>
      <button>Sell Stocks</button>
    </section>
  );
};

export default UserBalance;
