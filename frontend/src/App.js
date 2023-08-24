import { Button } from "@chakra-ui/react";
import "./App.css";
import axios from "axios";

import PortfolioPerformance from "./components/portfolio.js";

function App() {
  const testBuyStock = async () => {
    //   async function getPost() {
    //     try {
    //       const response = await axios.get(baseURL);
    //       setPortfolio(response.data);
    //     } catch (error) {
    //       setError(error);
    //     }
    //   }
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
    <div className="App">
      <PortfolioPerformance />
      <Button colorScheme="blue" onClick={testBuyStock}>
        testBuyStock
      </Button>
    </div>
  );
}

export default App;
