import "./App.css";

import PortfolioPerformance from "./components/portfolio.js";
import { StockTabs } from "./components/stockTabs";
function App() {
  return (
    <div className="App">
      <PortfolioPerformance />
      <StockTabs />
    </div>
  );
}

export default App;
