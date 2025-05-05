import React from "react";

export default function PurchaseHistory({ purchases }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mt-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Purchase History</h2>
      {purchases?.length > 0 ? (
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {purchases.map((p, i) => {
            const amount = typeof p.amount === "string"
              ? parseFloat(p.amount.replace(/[^0-9.]/g, ""))
              : p.amount;

            return (
              <li key={i} className="py-3 text-gray-700 dark:text-gray-200">
                <div className="flex justify-between">
                  <span><strong>Date:</strong> {p.date}</span>
                  <span><strong>Service:</strong> {p.service}</span>
                </div>
                <div className="text-right text-green-600 dark:text-green-400 font-semibold">
                  Amount: ${amount.toFixed(2)}
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="text-gray-500 dark:text-gray-400 italic">No purchase history available.</p>
      )}
    </div>
  );
}
