import { useState } from "react";
import { NavLink } from "react-router";  
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import logo from "../assets/visalogo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Visa Services", href: "/visaService" },
    { label: "My Application", href: "/my-application" },
  ];

  return (
    <header className="bg-[#a62d2d] text-white sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 h-16">
        {/* Logo */}
        <div>
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.href}
              className={({ isActive }) =>
                `py-2 relative transition-colors ${
                  isActive ? "after:w-full" : "after:w-0"
                } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-white after:transition-all hover:after:w-full`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <CloseOutlined className="text-2xl" />
            ) : (
              <MenuOutlined className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-[#a62d2d]">
          <ul className="flex flex-col p-4 space-y-2">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `block py-2 px-4 rounded hover:border-b-2 border-white ${
                      isActive ? "border-b-2 border-white" : ""
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
