import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import SubscriptionManager from "../components/SubscriptionManager";
import PurchaseHistory from "../components/PurchaseHistory";

export default function UserProfile({ theme }) {
  const { id } = useParams();
  const { users, updateUser } = useContext(UserContext);
  const selectedUser = users.find((u) => u.id === parseInt(id));

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ ...selectedUser });

  if (!selectedUser) {
    return <p className="text-red-600">User not found.</p>;
  }

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = () => {
    updateUser(selectedUser.id, formData);
    setEditMode(false);
  };

  return (
    <div
      className={`min-h-screen p-6 ${
        theme === "dark" ? "bg-black text-white" : "bg-gray-100 text-black"
      }`}
      style={{
        backgroundImage: `url("/Carwash.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-white/90 dark:bg-gray-900/90 p-6 rounded-lg shadow-md max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">User Profile</h1>

        {editMode ? (
          <>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full mb-2 p-2 border rounded dark:bg-gray-800 dark:text-white"
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full mb-2 p-2 border rounded dark:bg-gray-800 dark:text-white"
            />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="w-full mb-2 p-2 border rounded dark:bg-gray-800 dark:text-white"
            />
            <button
              onClick={handleSave}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 mr-2"
            >
              Save
            </button>
            <button
              onClick={() => setEditMode(false)}
              className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-500"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <p className="mb-2 text-gray-800 dark:text-gray-200">
              <strong>Name:</strong> {selectedUser.name}
            </p>
            <p className="mb-2 text-gray-800 dark:text-gray-200">
              <strong>Email:</strong> {selectedUser.email}
            </p>
            <p className="mb-2 text-gray-800 dark:text-gray-200">
              <strong>Phone:</strong> {selectedUser.phone}
            </p>
            <p className="mb-4 text-gray-800 dark:text-gray-200">
              <strong>Status:</strong>{" "}
              <span
                className={`inline-block px-2 py-1 text-xs rounded ${
                  selectedUser.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {selectedUser.status}
              </span>
            </p>
            <button
              onClick={() => setEditMode(true)}
              className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Edit Info
            </button>
          </>
        )}

        {/* Subscriptions and Purchases */}
        <div className="mt-6">
          <SubscriptionManager user={selectedUser} />
        </div>
        <div className="mt-6">
          <PurchaseHistory purchases={selectedUser.purchases || []} />
        </div>
      </div>
    </div>
  );
}
