import { FaLinkedin, FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";

import consul1 from "../assets/consul1.jpg";
import consul2 from "../assets/consul2.jpg";
import consul3 from "../assets/consul3.jpg";
import consul4 from "../assets/consul4.jpg";

const consultants = [
  { id: 1, name: "Devid Miller", image: consul1 },
  { id: 2, name: "Ritu Ratia", image: consul2 },
  { id: 3, name: "Shikhon Islam", image: consul3 },
  { id: 4, name: "Sonsil Macron", image: consul4 },
];

const ConsultantsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Professional People
        </h2>
        <p className="text-lg md:text-xl mb-12">Meet Our Expert Visa Consultants</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {consultants.map((c) => (
            <div key={c.id} className="relative group rounded-lg overflow-hidden shadow-lg">
              {/* Image */}
              <img
                src={c.image}
                alt={c.name}
                className="w-full h-72 object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay for social icons */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <a href="#" className="text-white text-2xl hover:text-blue-400"><FaLinkedin /></a>
                <a href="#" className="text-white text-2xl hover:text-red-500"><FaYoutube /></a>
                <a href="#" className="text-white text-2xl hover:text-blue-600"><FaFacebook /></a>
                <a href="#" className="text-white text-2xl hover:text-pink-500"><FaInstagram /></a>
              </div>

              {/* Name */}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white py-2 text-sm font-semibold">
                {c.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultantsSection;
