import React, { useEffect, useState } from 'react';
import GridLayout from 'react-grid-layout';
import ExpendituresWidget from '../components/ExpendituresWidget';
import BudgetWidget from '../components/BudgetWidget';
import StockMarketWidget from '../components/StockMarketWidget';
import GoalsWidget from "../components/GoalsWidget";
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({sidebarOpen}) => {
    const navigate = useNavigate();
    const [width, setWidth] = useState(window.innerWidth - (sidebarOpen ? 256 : 0)); // adjust for sidebar

    useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth - (sidebarOpen ? 256 : 0));
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [sidebarOpen]);

  // Define layout: x, y, w, h are in grid units
  const layout = [
    { i: 'expenditures', x: 0, y: 0, w: 4, h: 3, static: false },
    { i: 'budget', x: 4, y: 0, w: 4, h: 3, static: false },
    { i: 'stocks', x: 0, y: 3, w: 8, h: 6, static: false },
    { i: 'goals', x: 8, y: 0, w:3.5, h: 8, static: false }
  ];

  return (
    <div className={`transition-all duration-300 bg-gray-100 min-h-screen p-4 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={80}
        width={width}
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
                <BudgetWidget/>
            </div>
        </div>
        <div key="stocks" className="h-full relative">
          <div className="bg-white shadow rounded h-full w-full p-4 hover:shadow-lg transition">
            <div className="drag-handle absolute top-2 right-2 text-gray-500 cursor-move z-10"
            onClick={(e) => e.stopPropagation()}>&#x2630;</div>
            <StockMarketWidget />
          </div>
        </div>
        <div key="goals" className="h-full relative">
            <div className="bg-white shadow rounded h-full w-full p-4 cursor-pointer hover:shadow-lg transition"
            onClick={() => navigate("/goals")}>
                <div className="drag-handle absolute top-2 right-2 text-gray-500 cursor-move z-10"
                onClick={(e) => e.stopPropagation()}>&#x2630;</div>
                <GoalsWidget/>
            </div>
        </div>
      </GridLayout>
    </div>
  );
};

export default Dashboard;
