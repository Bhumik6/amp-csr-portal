// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ theme, toggleTheme }) {
  return (
    <div className={`w-64 min-h-screen p-6 flex flex-col justify-between ${theme === 'dark' ? 'bg-gray-800' : 'bg-blue-600'} text-white`}>
      <div>
        <h1 className="text-2xl font-bold mb-8">AMP CSR Portal</h1>

        <Link to="/" className="block bg-white text-blue-600 font-semibold py-2 px-4 rounded shadow mb-6 text-center">
          User List
        </Link>

        {/* Services & Pricing - Clean Version */}
        <div className="mt-10">
          <h2 className="text-white font-semibold text-lg mb-4">🚘 Services & Pricing</h2>
          <div className="space-y-3">
            {[
              { service: "Full Car Wash", price: "$25.00" },
              { service: "Interior Detailing", price: "$40.00" },
              { service: "Express Wash", price: "$15.00" },
              { service: "Deluxe Wash", price: "$35.00" },
              { service: "Engine Cleaning", price: "$45.00" },
              { service: "Tire Shine", price: "$10.00" },
              { service: "Interior Vacuum", price: "$20.00" },
            ].map(({ service, price }, index) => (
              <div
                key={index}
                className="bg-white/20 p-2 rounded text-sm backdrop-blur-sm hover:bg-white/30 transition"
              >
                <span className="font-semibold">{service}</span> — {price}
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={toggleTheme}
        className="bg-white text-blue-600 font-semibold py-2 px-4 rounded hover:bg-blue-100 transition"
      >
        {theme === "dark" ? "Switch to Light Theme" : "Switch to Dark Theme"}
      </button>
    </div>
  );
}
