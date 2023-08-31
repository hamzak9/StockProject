import { SimpleGrid } from "@chakra-ui/react";
import { StockCard } from "./stockCard";
import SearchBox from "./layout/SearchBox";
import React, { useState } from "react";


export const StockTabs = () => {
  const [ searchResult, setSearchResult] = useState("");

  const handleSearch = (value) => { 
    setSearchResult(value);
  }

  return (
    <div>
      <SearchBox onSearch={handleSearch} />
      <StockCard stockTicker={searchResult} interval="3mo" /> 
    </div>
  );
};
