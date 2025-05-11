import React from 'react'
import financeGoals from '../data/goals'

const GoalsWidget = () => {
  return (
    <div className="flex flex-col h-full">
        <h2 className="font-bold text-lg mb-2">Goals</h2>
        <div className="flex-1 overflow-y-auto space-y-3 pr-1">
            {financeGoals.map((goal) => {
                const percentage = Math.round((goal.savedAmount/goal.targetAmount) * 100);
                return (
                    <div key={goal.id} className="p-2 rounded">
                        <div className="font-semibold text-sm">{goal.title}</div>
                        <div className="text-xs text-gray-600 mb-1">Rs. {goal.savedAmount}/{goal.targetAmount}</div>
                        <div className="w-full h-2 bg-gray-300 rounded">
                            <div className="h-2 bg-blue-500 rounded" style={{width: `${percentage}%`}}></div>
                        </div>
                        <div className="text-right text-xs text-gray-500 mt-1">{percentage}%</div>
                    </div>
                );
            })}
        </div>
        <button className="">
            View All Goals
        </button>
    </div>
  )
}

export default GoalsWidget
