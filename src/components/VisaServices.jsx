import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function VisaServices() {
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/visaServices.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(search.toLowerCase())
  );

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    hover: {
      scale: 1.05,
      rotate: 1.5,
      transition: { duration: 0.4, type: "spring", stiffness: 120 },
    },
  };

  return (
    <div className="p-6">
      <title>Visa Services | Visa Portal</title>

      <h1 className="text-3xl font-bold text-center mb-6">Visa Services</h1>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search visa service..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded-lg w-1/2 focus:outline-none focus:ring-2 focus:ring-[#a62d2d]"
        />
      </div>

      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {filteredServices.map((service) => (
          <motion.div
            key={service.id}
            variants={cardVariants}
            whileHover="hover"
            className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer relative group"
          >
            {/* Card Image */}
            <div className="overflow-hidden relative z-10">
              <img
                alt={service.name}
                src={service.image}
                className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Card Content */}
            <div className="p-6 relative z-10">
              <h2 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-[#a62d2d] transition-colors">
                {service.name}
              </h2>
              <p className="text-gray-600 mb-3">{service.description}</p>
              <p className="text-sm font-medium text-blue-600">
                Processing Time: {service.processingTime}
              </p>
            </div>

            {/* Hover Overlay */}
            <motion.div
              className="absolute inset-0 bg-[#a62d2d]/20 opacity-0 group-hover:opacity-100 rounded-2xl z-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
