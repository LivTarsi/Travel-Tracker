import React, { useState } from 'react';
import axios from 'axios';

const TravelPlanner = () => {
  const [activity, setActivity] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState('');

  const handleAddActivity = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/add-activity', { activity, date });
      console.log(response.data);
      setActivity('');
      setDate('');
    } catch (err) {
      setError('Error adding activity');
    }
  };

  return (
    <div>
      <h2>Travel Planner</h2>
      <form onSubmit={handleAddActivity}>
        <input
          type="text"
          placeholder="Activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit">Add Activity</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default TravelPlanner;

