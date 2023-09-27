import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const inventory = useSelector(state => state.inventory);

  return (
    <div>
      <h1>Medical Device Inventory Dashboard</h1>
      {/* Display inventory information */}
      <ul>
        {inventory.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;

