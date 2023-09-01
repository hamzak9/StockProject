
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classes from './CashHistory.module.css';

const Portfolio = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/portfolio/getPortfolio')
      .then((response) => {
        setStocks(response.data);
      })
      .catch((error) => {
        console.error('Error fetching portfolio:', error);
      });
  }, []);

  return (
    <div className={classes.cashorder}>
      <p>Portfolio</p>
      <div>
        <table>
          <thead>
            <tr>
              <th>Total</th>
              <th>Ticker</th>
              <th>Name</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock, index) => (
              <tr key={index}>
                <td>
                  {stock.price ? `$${stock.price.toFixed(2)}` : ''}
                </td>
                <td>{stock.ticker}</td>
                <td>
                  {stock.name ? stock.name : ''}
                </td>
                <td>{stock.quantity ? stock.quantity : ''}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Portfolio;