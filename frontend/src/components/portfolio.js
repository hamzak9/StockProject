import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { MyResponsiveLine } from "./linechart";
const baseURL = "http://localhost:8080/api/compactdiscs";

export default function PortfolioPerformance() {
  const [portfolio, setPortfolio] = useState(null);
  const [error, setError] = useState(null);
  const data = [
    {
      id: "japan",
      color: "hsl(107, 70%, 50%)",
      data: [
        {
          x: "plaaane",
          y: 224,
        },
        {
          x: "helicopter",
          y: 175,
        },
        {
          x: "boat",
          y: 180,
        },
        {
          x: "train",
          y: 128,
        },
        {
          x: "subway",
          y: 41,
        },
        {
          x: "bus",
          y: 87,
        },
        {
          x: "car",
          y: 207,
        },
        {
          x: "moto",
          y: 5,
        },
        {
          x: "bicycle",
          y: 189,
        },
        {
          x: "horse",
          y: 254,
        },
        {
          x: "skateboard",
          y: 201,
        },
        {
          x: "others",
          y: 113,
        },
      ],
    },
    {
      id: "france",
      color: "hsl(277, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 198,
        },
        {
          x: "helicopter",
          y: 183,
        },
        {
          x: "boat",
          y: 251,
        },
        {
          x: "train",
          y: 189,
        },
        {
          x: "subway",
          y: 183,
        },
        {
          x: "bus",
          y: 114,
        },
        {
          x: "car",
          y: 140,
        },
        {
          x: "moto",
          y: 132,
        },
        {
          x: "bicycle",
          y: 203,
        },
        {
          x: "horse",
          y: 42,
        },
        {
          x: "skateboard",
          y: 207,
        },
        {
          x: "others",
          y: 279,
        },
      ],
    },
    {
      id: "us",
      color: "hsl(19, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 35,
        },
        {
          x: "helicopter",
          y: 154,
        },
        {
          x: "boat",
          y: 160,
        },
        {
          x: "train",
          y: 255,
        },
        {
          x: "subway",
          y: 148,
        },
        {
          x: "bus",
          y: 205,
        },
        {
          x: "car",
          y: 299,
        },
        {
          x: "moto",
          y: 200,
        },
        {
          x: "bicycle",
          y: 191,
        },
        {
          x: "horse",
          y: 264,
        },
        {
          x: "skateboard",
          y: 189,
        },
        {
          x: "others",
          y: 120,
        },
      ],
    },
    {
      id: "germany",
      color: "hsl(181, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 180,
        },
        {
          x: "helicopter",
          y: 163,
        },
        {
          x: "boat",
          y: 2,
        },
        {
          x: "train",
          y: 85,
        },
        {
          x: "subway",
          y: 62,
        },
        {
          x: "bus",
          y: 97,
        },
        {
          x: "car",
          y: 227,
        },
        {
          x: "moto",
          y: 121,
        },
        {
          x: "bicycle",
          y: 9,
        },
        {
          x: "horse",
          y: 61,
        },
        {
          x: "skateboard",
          y: 83,
        },
        {
          x: "others",
          y: 15,
        },
      ],
    },
    {
      id: "norway",
      color: "hsl(139, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 264,
        },
        {
          x: "helicopter",
          y: 112,
        },
        {
          x: "boat",
          y: 164,
        },
        {
          x: "train",
          y: 120,
        },
        {
          x: "subway",
          y: 168,
        },
        {
          x: "bus",
          y: 167,
        },
        {
          x: "car",
          y: 225,
        },
        {
          x: "moto",
          y: 160,
        },
        {
          x: "bicycle",
          y: 251,
        },
        {
          x: "horse",
          y: 207,
        },
        {
          x: "skateboard",
          y: 187,
        },
        {
          x: "others",
          y: 26,
        },
      ],
    },
  ];
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
      {/* <Box>
        {portfolio.map((item) => (
          <Box key={item.id} p="4">
            <Heading size="md">{item.title}</Heading>
            <Text mt="2">{item.artist}</Text>
            <Text>${item.price}</Text>
          </Box>
        ))}
      </Box> */}
      <Box w="620" h="640">
        <MyResponsiveLine data={data} />
      </Box>
    </Box>
  );
}
