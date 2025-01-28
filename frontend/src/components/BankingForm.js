import React from 'react';

const BankingForm = ({ onSubmit }) => {
  const [statement, setStatement] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(statement);
    setStatement('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Banking Statement</label>
      <input
        type="text"
        value={statement}
        onChange={(e) => setStatement(e.target.value)}
        placeholder="Enter statement"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default BankingForm;

