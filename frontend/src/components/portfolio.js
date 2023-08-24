import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

import { MyResponsiveLine } from "./linechart";
// const baseURL = "http://localhost:8080/api/compactdiscs";

export default function PortfolioPerformance() {
  // const [portfolio, setPortfolio] = useState(null);
  const data = [
    {
      id: "APPL",
      color: "hsl(64, 70%, 50%)",
      data: [
        {
          x: "2021-01-01",
          y: 147,
        },
        {
          x: "2021-01-02",
          y: 75,
        },
        {
          x: "2021-01-03",
          y: 25,
        },
        {
          x: "2021-01-04",
          y: 71,
        },
        {
          x: "2021-01-05",
          y: 164,
        },
        {
          x: "2021-01-06",
          y: 272,
        },
        {
          x: "2021-01-07",
          y: 251,
        },
        {
          x: "2021-01-08",
          y: 225,
        },
        {
          x: "2021-01-09",
          y: 102,
        },
        {
          x: "2021-01-10",
          y: 153,
        },
        {
          x: "2021-01-11",
          y: 156,
        },
        {
          x: "2021-01-12",
          y: 9,
        },
      ],
    },
  ];

  // useEffect(() => {
  //   async function getPost() {
  //     try {
  //       const response = await axios.get(baseURL);
  //       setPortfolio(response.data);
  //     } catch (error) {
  //       setError(error);
  //     }
  //   }
  //   getPost();
  // }, []);

  // if (error) return `Error: ${error.message}`;
  // if (!portfolio) return "No post!";

  return (
    <Box>
      <Flex>
        <Box p="4">
          <Text fontSize="5xl">Portfolio Value</Text>
        </Box>
        <Spacer />
        <Box p="4">
          <Text fontSize="5xl">$1000.00</Text>
        </Box>
      </Flex>
      <Box w="620" h="640">
        <MyResponsiveLine data={data} />
      </Box>
    </Box>
  );
}
