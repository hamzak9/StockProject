import { Button } from "@chakra-ui/react";
import "./App.css";
import axios from "axios";

import PortfolioPerformance from "./components/portfolio.js";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/layout/Header";
import ListStocks from "./components/portfolio/ListStocks";
import UserBalance from "./components/portfolio/UserBalance";
import SearchBox from "./components/layout/SearchBox";
import OrderHistory from "./components/portfolio/OrderHistory";
import ShowStockInfo from "./components/trends/ShowStockInfo";
import BuySellButton from "./components/layout/BuySellButton";
import CashHistory from "./components/portfolio/CashHistory";

// new branch test
function App() {
  const testBuyStock = async () => {
    try {
      // const url = http://localhost:8080/api/v1/stock/buy?symbol=AMZN&shares=1;
      const data = {
        symbol: "AMZN",
        shares: 1,
      };
      const url = "http://localhost:8080/api/portfolio/buystock";
      const response = await axios.post(url, data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="back">
      <Header />
      <UserBalance />
      <ListStocks />
      <div>
        <SearchBox /> <BuySellButton />
      </div>
      <ShowStockInfo />
      <div>
        <OrderHistory /> <CashHistory />
      </div>
      <section id="temp"></section>
    </div>
  );
}

export default App;
