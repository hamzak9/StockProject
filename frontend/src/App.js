import "./App.css";

import PortfolioPerformance from "./components/portfolio.js";
import { StockCard } from "./components/stockCard";

function App() {
  return (
    <div className="App">
      <PortfolioPerformance />

      <StockCard stockTicker="AMZN" interval={"3mo"} />
    </div>
  );
}

export default App;
