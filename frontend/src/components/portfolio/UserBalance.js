import classes from "./UserBalance.module.css";

const UserBalance = () => {
  return (
    <section className={classes.balance}>
      <div>UserName</div>
      <div>
        Cash Balance: <section>$11111</section>
      </div>
      <div>
        Total invested cash: <section>$111111</section>
      </div>
      <div>
        Total stock value: <section>$111111</section>
        <section>+ 22%</section>
      </div>
      <div>
        Current total net: <section>$222222</section>
      </div>
      <button>Deposit Cash</button>
      <button>Withdraw Cash</button>
    </section>
  );
};

export default UserBalance;
