import { motion } from "framer-motion";
import aus from "../assets/aus.jpg";
import dubai from "../assets/dubai.png";
import france from "../assets/france.png";
import india from "../assets/india.png";
import turkey from "../assets/turkey.png";
import us from "../assets/us.png";

const countries = [
  { id: 1, name: "USA", logo: us },
  { id: 2, name: "Australia", logo: aus },
  { id: 3, name: "Dubai", logo: dubai },
  { id: 4, name: "France", logo: france },
  { id: 5, name: "India", logo: india },
  { id: 6, name: "Turkey", logo: turkey },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const CountrySection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Visa Available Countries</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((country, idx) => (
            <motion.div
              key={country.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
              className="bg-white rounded-xl p-6 flex flex-col items-center justify-center shadow-lg transition-transform duration-500 hover:scale-105 hover:rotate-3 cursor-pointer"
            >
              <div className="w-20 h-20 mb-4">
                <img
                  src={country.logo}
                  alt={country.name}
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <span className="text-sm font-semibold">{country.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountrySection;
