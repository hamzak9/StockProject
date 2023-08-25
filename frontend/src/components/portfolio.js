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
          x: "01-01-2021",
          y: 147,
        },
        {
          x: "02-01-2021",
          y: 75,
        },
        {
          x: "03-01-2021",
          y: 25,
        },
        {
          x: "04-01-2021",
          y: 71,
        },
        {
          x: "05-01-2021",
          y: 164,
        },
        {
          x: "06-01-2021",
          y: 272,
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
      <Box maxW='100%' h="xl">
        <MyResponsiveLine data={data} />
      </Box>
    </Box>
  );
}
