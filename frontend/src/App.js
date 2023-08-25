import "./App.css";

import PortfolioPerformance from "./components/portfolio.js";
import { StockTabs } from "./components/stockTabs";
import { Flex } from "@chakra-ui/react";
import { StockOrderButton } from "./components/stockOrderButton";
function App() {
  return (
    <div className="App">
      <PortfolioPerformance />
      <Flex>
        <StockOrderButton orderType={"buystock"} operationName={"Buy Stocks"} />
        <StockOrderButton
          orderType={"sellstock"}
          operationName={"Sell Stocks"}
        />
      </Flex>
      <StockTabs />
    </div>
  );
}

export default App;
