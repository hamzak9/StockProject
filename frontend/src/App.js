import "./App.css";

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

import { StockTabs } from "./components/stockTabs";
import { Flex } from "@chakra-ui/react";
import { StockOrderButton } from "./components/stockOrderButton";

function App() {
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
      <div className="App">
        <PortfolioPerformance />
        <Flex>
          <StockOrderButton
            orderType={"buystock"}
            operationName={"Buy Stocks"}
          />
          <StockOrderButton
            orderType={"sellstock"}
            operationName={"Sell Stocks"}
          />
        </Flex>
        <StockTabs />
      </div>
    </div>
  );
}

export default App;
