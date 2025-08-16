import logo from "../assets/visalogo.svg";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#a62d2d] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo & Description */}
        <div className="flex flex-col items-start">
          <img src={logo} alt="Visa Portal Logo" className="w-36 mb-4" />
          <p className="text-gray-200">
            Visa Portal makes your visa application process fast, secure, and easy to track.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/visa-services" className="hover:underline">Visa Services</a></li>
            <li><a href="/my-application" className="hover:underline">My Application</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p>Email: info@visaportal.com</p>
          <p>Phone: +880123456789</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-gray-300"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-300"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-300"><FaLinkedinIn /></a>
          </div>
        </div>

      </div>

      <div className="text-center text-gray-300 mt-8 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Visa Portal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
