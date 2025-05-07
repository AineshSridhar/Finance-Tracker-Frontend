import React, { useRef } from 'react'
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

const StockMarketWidget = () => {
    const chartRef = useRef(null);

    const stockData = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
        datasets: [
            {
                label: "Stock Price",
                data: [150, 160, 155, 170, 180],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }
        ]
    }

    const options = {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Days of the Week"
                }
            },
            y: {
                title: {
                    display: true,
                    text: "Price (in $)"
                }
            }
        }
    }

  return (
    <div className="flex flex-col items-center justify-between p-4 h-full">
      <h2>Stock Market Tracker</h2>
      <Line data={stockData} options = {options}/>
    </div>
  )
}

export default StockMarketWidget
