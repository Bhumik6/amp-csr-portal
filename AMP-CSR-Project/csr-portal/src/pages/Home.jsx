import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Home({ theme }) {
  const { users } = useContext(UserContext);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className="flex-1 p-6 overflow-auto"
      style={{
        backgroundImage: `url("/Carwash.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 rounded-lg p-6 shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          Registered Users
        </h1>

        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-6 w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-700 dark:text-white dark:border-gray-600"
        />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              onClick={() => navigate(`/user/${user.id}`)}
              className="cursor-pointer bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                {user.name}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {user.email}
              </p>
              <span
                className={`inline-block mt-2 px-2 py-1 text-xs rounded ${
                  user.status.toLowerCase() === "active"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {user.status}
              </span>
            </div>
          ))}
        </div>

        {/* Monthly Subscription Plans */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
          <div className="bg-blue-100 dark:bg-blue-900 rounded-xl p-6 shadow-md">
            <h2 className="text-xl font-bold text-blue-800 dark:text-blue-300 mb-2">
              🧼 Monthly Wash Pass
            </h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              Wash as often as you like for one low monthly price!
            </p>
            <ul className="text-sm list-disc pl-4 text-gray-800 dark:text-white space-y-1">
              <li><strong>Ultimate:</strong> $49.95/month – All services + Rain-X</li>
              <li><strong>Works:</strong> $39.95/month – Turbo, Wax, Clear Coat</li>
              <li><strong>Deluxe:</strong> $29.95/month – Basic with extra rinse</li>
            </ul>
          </div>

          <div className="bg-blue-50 dark:bg-blue-800 rounded-xl p-6 shadow-md">
            <h2 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-2">
              🚘 Unlimited Monthly Plan
            </h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              Great for families and ride-share drivers!
            </p>
            <ul className="text-sm list-disc pl-4 text-gray-800 dark:text-white space-y-1">
              <li><strong>Basic:</strong> $30/month – High-pressure turbo wash</li>
              <li><strong>Premium:</strong> $40/month – Includes underbody + wax</li>
              <li><strong>RainX Pro:</strong> $45/month – All features + triple coat</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
