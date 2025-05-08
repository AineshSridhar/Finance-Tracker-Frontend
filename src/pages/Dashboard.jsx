import React from 'react';
import GridLayout from 'react-grid-layout';
import ExpendituresWidget from '../components/ExpendituresWidget';
import Budget from '../components/Budget';
import StockMarketWidget from '../components/StockMarketWidget';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const Dashboard = () => {
  // Define layout: x, y, w, h are in grid units
  const layout = [
    { i: 'expenditures', x: 0, y: 0, w: 4, h: 3, static: false },
    { i: 'budget', x: 4, y: 0, w: 4, h: 3, static: false },
    { i: 'stocks', x: 0, y: 3, w: 4, h: 3, static: false },
  ];

  return (
    <div className="w-full h-screen bg-gray-100 p-4">
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={80}
        width={1200}
        isResizable={false}
      >
        <div key="expenditures" className="bg-white shadow rounded p-2">
          <ExpendituresWidget />
        </div>
        <div key="budget" className="bg-white shadow rounded p-2">
          <Budget />
        </div>
        <div key="stocks" className="bg-white shadow rounded p-2">
          <StockMarketWidget />
        </div>
      </GridLayout>
    </div>
  );
};

export default Dashboard;
