import { SimpleGrid } from "@chakra-ui/react";
import { StockCard } from "./stockCard";
export const StockTabs = () => {
  return (
      <StockCard stockTicker="AMZN" interval="3mo" />
  );
};
