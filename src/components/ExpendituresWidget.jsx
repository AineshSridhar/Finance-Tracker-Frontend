import React from 'react'

const ExpendituresWidget = () => {
    const data = [
        {name: "Groceries", amount: 1200},
        {name: "Electricity Bill", amount: 800},
        {name: "Transport", amount: 400},
    ];
    
  return (
    <div>
      <h2 className="text-lg font-bold mb-2 rounded-xl">Today's Expenditures</h2>
      <ul className="space-y-1 text-sm">
        {data.map((item, i) => (
            <li key={i} className="flex justify-between">
                <span>{item.name}</span>
                <span className="text-blue-500">Rs.{item.amount}</span>
            </li>
        ))}
        <div className="absolute font-bold bottom-6 left-4 right-4 text-sm text-gray-500 flex justify-between">
            <span>Amount spent today:</span>
            <span>5000</span>
        </div>
      </ul>
    </div>
  )
}

export default ExpendituresWidget
