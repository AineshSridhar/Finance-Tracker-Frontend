import React from 'react';
import expenditures from "../data/pastExpenditures";

const Expenditures = () => {
  // Group expenditures by category and calculate total
  const categoryTotals = {};
  let grandTotal = 0;

  expenditures.forEach((item) => {
    grandTotal += item.amount;
    if (categoryTotals[item.category]) {
      categoryTotals[item.category] += item.amount;
    } else {
      categoryTotals[item.category] = item.amount;
    }
  });

  return (
    <div className="px-10">
      <h2 className="text-center text-orange-500 text-xl font-bold pt-8 pl-8 mb-10">Expenditures</h2>
      <div className="flex flex-row gap-10">
        {/* Main table */}
        <table className="border-b-2 w-3/4">
          <thead className="border-b-2">
            <tr>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Amount (Rs.)</th>
              <th className="px-4 py-2">Payment method</th>
              <th className="px-4 py-2">Note</th>
            </tr>
          </thead>
          <tbody>
            {expenditures.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-4 text-gray-500">{item.date}</td>
                <td className="px-4 py-4">{item.category}</td>
                <td className="px-4 py-4 font-semibold">{item.amount.toFixed(2)}</td>
                <td className="px-4 py-4">{item.paymentMethod}</td>
                <td className="px-4 py-4">{item.note}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Summary Table */}
        <div className="w-1/4">
          <h3 className="bg-blue-500 text-center py-2 rounded text-white">Summary</h3>
          <table className="mt-4 w-full text-sm">
            <thead>
              <tr className="text-left border-b">
                <th className="px-2 py-2">Category</th>
                <th className="px-2 py-2 text-right">% of Total</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(categoryTotals).map(([category, total]) => (
                <tr key={category}>
                  <td className="px-2 py-2">{category}</td>
                  <td className="px-2 py-2 text-right text-gray-600">
                    {((total / grandTotal) * 100).toFixed(1)}%
                  </td>
                </tr>
              ))}
              <tr className="border-t font-bold">
                <td className="px-2 py-2">Total</td>
                <td className="px-2 py-2 text-right">₹{grandTotal.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default Expenditures;
