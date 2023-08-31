import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
  Box,
  Container,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { MyResponsiveLine } from "./linechart";

export const StockCard = ({ stockTicker, interval }) => {
  const [stockData, setStockData] = useState({
    symbol: "Equity Explorers",
    regularMarketPrice: 30,
    exchangeName: "Nasdaq",
    currency: "CAD",
    prices: [
      {
        id: "EE",
        color: "hsl(64, 70%, 50%)",
        data: [
          {
            x: "01-08-2021",
            y: 25,
          },
          {
            x: "01-08-2022",
            y: 75,
          },
          {
            x: "01-08-2023",
            y: 500,
          },
        ],
      },
    ],
    trend: {
      current: 1.29,
      "60daysAgo": 1.36,
      "90daysAgo": 1.36,
      "30daysAgo": 1.36,
      "7daysAgo": 1.39,
    },
  });

  useEffect(() => {
    async function getStockData() {
      const convertStockPricesToLineChart = (stockPrices) => {
        const lineChartData = stockPrices.map((stockPrice) => {
          return { x: stockPrice["date"], y: parseFloat(stockPrice["close"]) };
        });

        const sortedLineChartData = [...lineChartData].sort((a, b) => {
          return new Date(a["x"]) - new Date(b["x"]);
        });

        return [
          {
            id: stockTicker,
            color: "hsl(30, 50%, 50%)",
            data: sortedLineChartData,
          },
        ];
      };
      try {
        const response = await axios.get(
          `http://localhost:8080/api/stock/history/${stockTicker}/${interval}`
        );

        // const response = {
        //   data: {
        //     symbol: stockTicker,
        //     regularMarketPrice: 30,
        //     exchangeName: "Nasdaq",
        //     currency: "CAD",
        //     prices: [
        //       {
        //         date: "01-05-2021",
        //         close: 25,
        //       },
        //       {
        //         date: "02-08-2023",
        //         close: 75,
        //       },
        //       {
        //         date: "03-08-2025",
        //         close: 500,
        //       },
        //     ],
        //   },
        // };

        const lineChartData = convertStockPricesToLineChart(
          response.data["prices"]
        );

        const trendResponse = await axios.get(
          `http://localhost:8080/api/stock/gettrend/${stockTicker}`
        );

        const result = {
          symbol: response.data["symbol"],
          regularMarketPrice: response.data["regularMarketPrice"],
          exchangeName: response.data["exchangeName"],
          currency: response.data["currency"],
          prices: lineChartData,
          trend: trendResponse.data["earningsTrend"],
        };
        setStockData(result);
      } catch (error) {
        console.log(error);
      }
    }
    getStockData();
  }, [stockTicker, interval]);

  return (
    <Card size={"xl"}>
      <CardHeader>
        <Heading size="md">{stockData["symbol"]}</Heading>
        <Heading size="md">{stockData["regularMarketPrice"]}</Heading>
        <Text>{stockData["exchangeName"]}</Text>
      </CardHeader>
      <CardBody>
        <Container>
          <Heading size={"sm"}>EPS Trend</Heading>
          <Text>
            Current: {stockData["trend"]["current"]}
            <br />7 Days Ago: {stockData["trend"]["7daysAgo"]}
            <br />
            30 Days Ago: {stockData["trend"]["30daysAgo"]}
            <br />
            60 Days Ago: {stockData["trend"]["60daysAgo"]}
            <br />
            90 Days Ago: {stockData["trend"]["90daysAgo"]}
            <br />
          </Text>
        </Container>
        <Box w="100%" h="500">
          <MyResponsiveLine data={stockData["prices"]} />
        </Box>
      </CardBody>
    </Card>
  );
};
