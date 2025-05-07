import React from 'react'

const Budget = () => {
    const target = 20000;
    const saved = 14000;
    const percentage = Math.round((saved/target) * 100);
    const remaining = target - saved;

  return (
    <div>
        <h2 className="text-lg font-bold mb-2 rounded-xl">Budget</h2>
        <ul></ul>
        <div className="w-full h-2 bg-gray-200 rounded">
            <div className="h-2 bg-blue-600 rounded" style={{width: `${percentage}%`}}></div>
        </div>

        <div className="flex justify-between text-sm text-gray-600">
            <span>USD{saved} saved so far/</span>
            <span>{percentage}%</span>
        </div>
    </div>
  )
}

export default Budget
