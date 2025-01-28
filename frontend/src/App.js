import React, { useState } from 'react';
import BankingForm from './components/BankingForm';

function App() {
  const [statements, setStatements] = useState([]);

  const handleAddStatement = (newStatement) => {
    setStatements([...statements, newStatement]);
  };

import React from 'react';
import CurrencyConverter from './components/CurrencyConverter';

function App() {
  return (
    <div>
      <CurrencyConverter />
    </div>
  );
}

export default App;


