import React, { useEffect, useState } from 'react';
import axios from 'axios';
import classes from "./OrderHistory.module.css";

const OrderHistory = () => {
  const [groups, setGroups] = useState([]);
  
  useEffect(() => {

    axios.get('http://localhost:8080/api/order/getOrderHistory')
      .then((response) => {
        setGroups(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className={classes.order}>
      <p>Stock Order History</p>
      <div>
        <table>
          <thead>
            <tr>
              <th>Ticker</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Type</th>
              <th>Date & Time</th>
            </tr>
          </thead>
          <tbody>
            {groups.map(group => (
              <tr key={group.id}>
                <td>{group.ticker}</td>
                <td>{group.total}</td>
                <td>{group.shares}</td>
                <td>{group.type}</td>
                <td>{group.date}</td>
              </tr>
              
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderHistory;





