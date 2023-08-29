import classes from "./BuySellButton.module.css";
import SearchBox from "./SearchBox";

const BuySellButton = () => {
  return (
    <section className={classes.buysell}>
      <button>Buy stock</button>
      <button>Sell stock</button>
    </section>
  );
};

export default BuySellButton;
