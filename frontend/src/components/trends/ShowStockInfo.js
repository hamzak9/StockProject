import classes from "./ShowStokInfo.module.css";
import PortfolioPerformance from "../portfolio";

const ShowStockInfo = () => {
  return (
    <section className={classes.stockinfo}>
      <PortfolioPerformance />
    </section>
  );
};

export default ShowStockInfo;
