import React from 'react';
import PortfolioPerformance from './portfolio.js';
import Header from './layout/Header';
import UserBalance from './portfolio/UserBalance.js'
import { Link } from 'react-router-dom';

import ListStocks from './portfolio/ListStocks.js';

const Analytics = () => {
  // Your Analytics component content here
  return (
    <div className="back">
    <Header/>
    <Link to="/">
        <button>Home</button>
      </Link>
    <UserBalance />

    <PortfolioPerformance/>
    <ListStocks/>

    </div>
  );
};

export default Analytics;
