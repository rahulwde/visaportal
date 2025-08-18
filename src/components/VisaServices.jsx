import React, { useEffect, useState } from "react";
import { Card } from "antd";

export default function VisaServices() {
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/visaServices.json") // public folder থেকে fetch হবে
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  // ✅ Search filter
  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Visa Services</h1>

      {/* Search Input */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search visa service..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded-lg w-1/2"
        />
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <Card
            key={service.id}
            cover={
              <img
                alt={service.name}
                src={service.image}
                className="h-48 object-cover"
              />
            }
            className="shadow-lg rounded-lg"
          >
            <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
            <p className="text-gray-600">{service.description}</p>
            <p className="mt-2 text-sm text-blue-600 font-medium">
              Processing Time: {service.processingTime}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
