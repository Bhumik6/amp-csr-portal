import React, { useState } from "react";

export default function SubscriptionManager({ user }) {
  const [vehicles, setVehicles] = useState(user.vehicles || []);

  const handleRemove = (index) => {
    const updated = vehicles.filter((_, i) => i !== index);
    setVehicles(updated);
  };

  const handleAdd = () => {
    setVehicles([...vehicles, { plate: "", model: "" }]);
  };

  const handleChange = (index, field, value) => {
    const updated = [...vehicles];
    updated[index][field] = value;
    setVehicles(updated);
  };

  return (
    <div className="bg-white p-4 rounded shadow mt-4">
      <h2 className="text-xl font-semibold mb-2">Vehicle Subscriptions</h2>
      {vehicles.map((v, i) => (
        <div key={i} className="mb-2 flex gap-2">
          <input
            placeholder="Plate"
            value={v.plate}
            onChange={e => handleChange(i, "plate", e.target.value)}
            className="border p-2 flex-1"
          />
          <input
            placeholder="Model"
            value={v.model}
            onChange={e => handleChange(i, "model", e.target.value)}
            className="border p-2 flex-1"
          />
          <button onClick={() => handleRemove(i)} className="bg-red-500 text-white px-2">X</button>
        </div>
      ))}
      <button onClick={handleAdd} className="mt-2 bg-green-600 text-white px-3 py-1 rounded">+ Add Vehicle</button>
    </div>
  );
}
