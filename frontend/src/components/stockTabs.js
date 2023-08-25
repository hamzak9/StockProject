import { SimpleGrid } from "@chakra-ui/react";
import { StockCard } from "./stockCard";
export const StockTabs = () => {
  return (
    <SimpleGrid
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(30%, 32%))"
    >
      <StockCard stockTicker="Equity Explorers" interval="3mo" />
      <StockCard stockTicker="APPL" interval="3mo" />
      <StockCard stockTicker="AMZN" interval="3mo" />
    </SimpleGrid>
  );
};
