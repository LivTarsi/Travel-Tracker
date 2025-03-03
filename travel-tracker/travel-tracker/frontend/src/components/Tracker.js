import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Tracker = () => {
  const [tripData, setTripData] = useState(null);

  useEffect(() => {
    const fetchTripData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/tracker');
        setTripData(response.data);
      } catch (err) {
        console.error('Error fetching trip data:', err);
      }
    };
    fetchTripData();
  }, []);

  if (!tripData) return <p>Loading...</p>;

  return (
    <div>
      <h2>Travel Tracker</h2>
      <div>
        <p>Budget: {tripData.budget}</p>
        <p>Remaining: {tripData.remaining}</p>
      </div>
    </div>
  );
};

export default Tracker;

