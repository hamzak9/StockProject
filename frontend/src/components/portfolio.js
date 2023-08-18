import { Box, Text } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";

export default function PortfolioPerformance() {
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
    </Box>
  );
}
