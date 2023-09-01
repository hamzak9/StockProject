import React from 'react';
import Header from './components/layout/Header'; 
import UserBalance from './components/portfolio/UserBalance';
import ListStocks from './components/portfolio/ListStocks';
import SearchBox from './components/layout/SearchBox';
import BuySellButton from './components/layout/BuySellButton';
import ShowStockInfo from './components/trends/ShowStockInfo'; 
import OrderHistory from './components/portfolio/OrderHistory';
import CashHistory from './components/portfolio/CashHistory';
 import PortfolioPerformance from './components/portfolio'; 
import { Flex } from "@chakra-ui/react";
import { StockOrderButton } from './components/stockOrderButton';
import classes from './Main.module.css';
import { StockTabs } from './components/stockTabs';
import {Link } from "react-router-dom";

function Main() {
  return (
    <div className="back">
      <Header />
      <Link to="/analytics">
          <button>Analytics</button>
        </Link>
      <UserBalance />
      {/* <ListStocks/> */}
      <Flex>
     
      <CashHistory/>
            <div id='cashorder'></div>
          <StockOrderButton
            orderType={"buystock"}
            operationName={"Buy Stocks"}
            styles={"background-colour:red"}
          />
          <StockOrderButton
            orderType={"sellstock"}
            operationName={"Sell Stocks"}
          />
                <OrderHistory/>

        </Flex>      {/* <ListStocks /> */}
        {/* <SearchBox/> */}
      {/* <ShowStockInfo /> */}
        <StockTabs/>
      <div className="App">
        {/* <PortfolioPerformance /> */}
        {/* <StockTabs /> */}
      </div>
    </div>
  );
}

export default Main;