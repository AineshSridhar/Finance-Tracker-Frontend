import React from 'react';
import GridLayout from 'react-grid-layout';
import ExpendituresWidget from '../components/ExpendituresWidget';
import Budget from '../components/BudgetWidget';
import StockMarketWidget from '../components/StockMarketWidget';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({sidebarOpen}) => {
    const navigate = useNavigate();

  // Define layout: x, y, w, h are in grid units
  const layout = [
    { i: 'expenditures', x: 0, y: 0, w: 4, h: 3, static: false },
    { i: 'budget', x: 4, y: 0, w: 4, h: 3, static: false },
    { i: 'stocks', x: 0, y: 3, w: 8, h: 5, static: false },
  ];

  return (
    <div className={`transition-all duration-300 bg-gray-100 min-h-screen p-4 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={80}
        width={1200}
        isResizable={false}
        draggableHandle='.drag-handle'
      >
        <div key="expenditures" className="h-full relative">
            <div className="bg-white shadow rounded h-full w-full p-4 cursor-pointer hover:shadow-lg transition"
            onClick={() => navigate("/expenditures")}>
                <div className="drag-handle absolute top-2 right-2 text-gray-500 cursor-move z-10"
                onClick={(e) => e.stopPropagation()}>&#x2630;</div>
                <ExpendituresWidget/>
            </div>
        </div>
        <div key="budget" className="h-full relative">
            <div className="bg-white shadow rounded h-full w-full p-4 cursor-pointer hover:shadow-lg transition"
            onClick={() => navigate("/budget")}>
                <div className="drag-handle absolute top-2 right-2 text-gray-500 cursor-move z-10"
                onClick={(e) => e.stopPropagation()}>&#x2630;</div>
                <Budget/>
            </div>
        </div>
        {/* <div key="budget" className="bg-white shadow rounded p-4">
          <Budget />
        </div> */}
        <div key="stocks" className="bg-white shadow rounded p-2">
          <StockMarketWidget />
        </div>
      </GridLayout>
    </div>
  );
};

export default Dashboard;
