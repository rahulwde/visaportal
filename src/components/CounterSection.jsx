import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { FaGlobe, FaPassport, FaMoneyBillWave, FaUserTie } from "react-icons/fa";
import { motion } from "framer-motion";

const stats = [
  {
    id: 1,
    title: "Countries Represented",
    value: 35,
    suffix: "+",
    icon: <FaGlobe size={40} />,
  },
  {
    id: 2,
    title: "Completed Visa Passport",
    value: 853,
    suffix: "+",
    icon: <FaPassport size={40} />,
  },
  {
    id: 3,
    title: "Revenue In per year",
    value: 55,
    suffix: "M+",
    icon: <FaMoneyBillWave size={40} />,
  },
  {
    id: 4,
    title: "Experience immigration officer",
    value: 3,
    suffix: "+",
    icon: <FaUserTie size={40} />,
  },
];

const CounterSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,  
    threshold: 0.2, 
  });

  return (
    <section className="py-16 bg-gray-100" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white group shadow-lg rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-500 hover:bg-[#a62d2d]"
          >
            {/* Icon */}
            <motion.div
              whileHover={{ rotate: 180 }}
              className="mb-4 text-gray-700 group-hover:text-white transition-colors duration-500"
            >
              {item.icon}
            </motion.div>

            {/* Number Counter */}
            <h2 className="text-3xl font-bold text-gray-800 group-hover:text-white">
              {inView ? (
                <CountUp
                  start={0}
                  end={item.value}
                  duration={2.5}
                  suffix={item.suffix}
                />
              ) : (
                "0"
              )}
            </h2>

            {/* Title */}
            <p className="mt-2 text-gray-600 group-hover:text-gray-200 transition-colors duration-500">
              {item.title}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CounterSection;
