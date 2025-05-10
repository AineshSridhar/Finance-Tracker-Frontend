import React from 'react'
import expenditures from "../data/pastExpenditures"

const Expenditures = () => {
  return (
    <div>
      <h2 className="text-center text-blue-900 text-xl font-bold pt-8 pl-8 mb-10">Expenditures</h2>
      <div className="">
        <table className="border-b-2 w-3/4">
          <thead className="border-b-2">
            <tr>
              <th>Date</th>
              <th>Category</th>
              <th>Amount(Rs.)</th>
              <th>Payment method</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            {expenditures.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-2">{item.date}</td>
                <td className="px-4 py-2">{item.category}</td>
                <td className="px-4 py-2">{item.amount.toFixed(2)}</td>
                <td className="px-4 py-2">{item.paymentMethod}</td>
                <td className="px-4 py-2">{item.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Expenditures
