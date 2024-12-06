import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/konectar-logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-300 py-3">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="w-2/5 lg:w-1/5">
            <img
              className="w-full"
              src={logo}
              alt="Konectar Logo"
              loading="lazy"
            />
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex space-x-8">
            <li>
              <a href="/" className="hover:text-green-600">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-green-600">
                About
              </a>
            </li>
            <li className="relative group">
              <a
                href="/FarmersPage"
                className="flex items-center hover:text-green-600"
              >
                Our Services
                <FaChevronDown className="ml-2 text-gray-600 w-3 h-3 group-hover:hidden" />
                <FaChevronUp className="ml-2 text-gray-600 w-3 h-3 hidden group-hover:block" />
              </a>
              <ul className="absolute left-0 mt-2 bg-gray-100 shadow-lg hidden group-hover:block">
                <li className="p-2 hover:bg-green-600 transition">
                  <a
                    href="/FarmersPage"
                    className="block whitespace-nowrap text-gray-800 hover:text-white"
                  >
                    Konectar for Farmers
                  </a>
                </li>
                <li className="p-2 hover:bg-green-600 transition">
                  <a
                    href="/BuyersPage"
                    className="block whitespace-nowrap text-gray-800 hover:text-white"
                  >
                    Konectar for Buyers
                  </a>
                </li>
                <li className="p-2 hover:bg-green-600 transition">
                  <a
                    href="/TruckersPage"
                    className="block whitespace-nowrap text-gray-800 hover:text-white"
                  >
                    Konectar for Truckers
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/blog" className="hover:text-green-600">
                Blog
              </a>
            </li>
          </ul>

          {/* Desktop Call-to-Action */}
          <div className="hidden lg:flex">
            <a href="/WaitingListForm">
              <button
                type="button"
                className="bg-green-600 px-6 py-2 rounded-lg text-white hover:bg-green-700"
              >
                Join Waitlist
              </button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            {menuOpen ? (
              <FaTimes
                className="text-gray-600 w-6 h-6"
                onClick={() => setMenuOpen(false)}
              />
            ) : (
              <FaBars
                className="text-gray-600 w-6 h-6"
                onClick={() => setMenuOpen(true)}
              />
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <ul className="flex flex-col items-center mt-4 bg-gray-100 p-4 space-y-4">
            <li>
              <a
                href="/"
                className="block w-full text-center hover:text-green-600"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="block w-full text-center hover:text-green-600"
              >
                About
              </a>
            </li>
            <li className="relative w-full group">
              <div className="flex justify-center items-center w-full">
                <a
                  href="/FarmersPage"
                  className="flex items-center w-full justify-center space-x-2 hover:text-green-600"
                >
                  <span>Our Services</span>
                  <FaChevronDown className="text-gray-600 w-4 h-4 group-hover:hidden" />
                  <FaChevronUp className="text-gray-600 w-4 h-4 hidden group-hover:block" />
                </a>
              </div>
              <ul className="mt-2 hidden group-hover:flex flex-col space-y-2">
                <li>
                  <a
                    href="/FarmersPage"
                    className="block w-full text-center hover:text-green-600"
                  >
                    Konectar for Farmers
                  </a>
                </li>
                <li>
                  <a
                    href="/BuyersPage"
                    className="block w-full text-center hover:text-green-600"
                  >
                    Konectar for Buyers
                  </a>
                </li>
                <li>
                  <a
                    href="/TruckersPage"
                    className="block w-full text-center hover:text-green-600"
                  >
                    Konectar for Truckers
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="/blog"
                className="block w-full text-center hover:text-green-600"
              >
                Blog
              </a>
            </li>
            <li>
              <a href="/WaitingListForm" className="block w-full">
                <button
                  type="button"
                  className="bg-green-600 px-6 py-2 rounded-lg text-white hover:bg-green-700"
                >
                  Join Waitlist
                </button>
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
