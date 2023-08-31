import React from 'react';
import './App.css';
import PortfolioPerformance from './components/portfolio.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Main />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;