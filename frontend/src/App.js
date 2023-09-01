import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Analytics from './components/analytics.js';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/analytics" element={<Analytics />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;