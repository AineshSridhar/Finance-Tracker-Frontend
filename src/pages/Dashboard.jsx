import { Rnd } from "react-rnd";
import ExpendituresWidget from "../components/ExpendituresWidget";
import Budget from "../components/Budget";
import StockMarketWidget from "../components/StockMarketWidget";

import React from 'react'

const Dashboard = () => {
  return (
    <div>
        <div className="w-full h-screen bg-gray-100 relative overflow-hidden">
            <Rnd default = {{
                x: 50,
                y: 50,
                width: 320,
                height: 240,
            }}
            bounds = "parent"
            minWidth = {200}
            minHeight = {150}
            className="bg-white shadow rounded p-2"
        >
            <ExpendituresWidget/>
            </Rnd>
            <Rnd default = {{
                x: 400,
                y: 50,
                width: 320,
                height: 240,
            }}
            bounds = "parent"
            minWidth = {200}
            minHeight = {150}
            className="bg-white shadow rounded p-2"
        >
            <div className="p-2 flex items-center justify-center h-full">
                <Budget/>
            </div> 
            </Rnd>
            <Rnd default={{
                x: 50,
                y: 300, // Adjust y position to avoid overlap
                width: 320,
                height: 240,
            }}
            bounds="parent"
            minWidth={200}
            minHeight={150}
            className="bg-white shadow rounded p-2">
                <StockMarketWidget />  {/* New Stock Market Widget */}
            </Rnd>

        </div>
    </div>
  );
}

export default Dashboard
