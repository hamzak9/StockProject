import {
    Card,
    CardBody,
    CardHeader,
    Heading,
    Text
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

export const StockCard = ({ stockTicker, interval }) => {
  const [stockData, setStockData] = useState({});

  useEffect(() => {
    async function getStockData() {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/stockInfo/history/${stockTicker}/${interval}`
        );

        setStockData(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    getStockData();
  }, []);

  return (
    <Card maxW="md">
      <CardHeader>
        <Heading size="md">{stockData["symbol"]}</Heading>
        <Heading size="md">{stockData["regularMarketPrice"]}</Heading>
        <Text>{stockData["exchangeName"]}</Text>
      </CardHeader>
      <CardBody>
        <Text>View a summary of all your customers over the last month.</Text>
      </CardBody>
    </Card>
  );
};
