import { SimpleGrid } from "@chakra-ui/react";
import { StockCard } from "./stockCard";
export const StockTabs = () => {
  return (
    <SimpleGrid
      spacing={4}
      mt={4}
      templateColumns="repeat(auto-fill, minmax(30%, 32%))"
    >
      <StockCard stockTicker="GOOGL" interval="3mo" />
      <StockCard stockTicker="AAPL" interval="3mo" />
      <StockCard stockTicker="AMZN" interval="3mo" />
    </SimpleGrid>
  );
};
