import React from 'react'

const Budget = () => {
    const target = 20000;
    const saved = 14000;
    const percentage = Math.round((saved/target) * 100);
    const remaining = target - saved;

  return (
    <div className="flex flex-col justify-between w-full h-full">
        <div className="flex flex-col gap-1">
            <h2 className="text-lg font-bold mb-2 rounded-xl">Monthly Budget</h2>
            <ul></ul>
            <span className="font-bold text-md">Rs. {target}</span>
            <div className="w-full h-2 bg-gray-200 rounded">
                <div className="h-2 bg-blue-600 rounded" style={{width: `${percentage}%`}}></div>
            </div>

            <div className="flex justify-between text-sm text-gray-600">
                <span>Rs. {saved} saved so far</span>
                <span>{percentage}%</span>
            </div>
        </div>

        <button className="mt-auto text-sm text-blue-500 border-blue-500 border py-1 rounded-sm">
            View details
        </button>
    </div>
  )
}

export default Budget
