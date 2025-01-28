import React, { useState } from 'react';
import { getExchangeRate } from '../api/currency';

const CurrencyConverter = () => {
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState(null);

  const handleConvert = async () => {
    const rate = await getExchangeRate(baseCurrency, targetCurrency);
    setConvertedAmount(amount * rate);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Base Currency (e.g., USD)"
        value={baseCurrency}
        onChange={(e) => setBaseCurrency(e.target.value)}
      />
      <input
        type="text"
        placeholder="Target Currency (e.g., EUR)"
        value={targetCurrency}
        onChange={(e) => setTargetCurrency(e.target.value)}
      />
      <button onClick={handleConvert}>Convert</button>
      {convertedAmount !== null && <p>Converted Amount: 
{convertedAmount}</p>}
    </div>
  );
};

export default CurrencyConverter;

