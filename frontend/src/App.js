import "./App.css";
import { Flex } from "@chakra-ui/react";

import PortfolioPerformance from "./components/portfolio.js";
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
    </div>
  );
}

export default App;
