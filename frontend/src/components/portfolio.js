import { Box, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

const baseURL = "http://localhost:8080/api/compactdiscs";

export default function PortfolioPerformance() {
  const [portfolio, setPortfolio] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getPost() {
      try {
        const response = await axios.get(baseURL);
        setPortfolio(response.data);
      } catch (error) {
        setError(error);
      }
    }
    getPost();
  }, []);

  if (error) return `Error: ${error.message}`;
  if (!portfolio) return "No post!";

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
      <Box>
        {portfolio.map((item) => (
          <Box key={item.id} p="4">
            <Heading size="md">{item.title}</Heading>
            <Text mt="2">{item.artist}</Text>
            <Text>${item.price}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
