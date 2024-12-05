import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/konectar-logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 py-3 bg-white border-b border-gray-300">
      <div className="container mx-auto px-8 md:px-16">
        <div className="flex justify-between items-center">
          <div className="basis-2/5 lg:basis-1/5">
            <img
              className="w-full"
              src={logo}
              alt="Konectar Logo"
              loading="lazy"
            />
          </div>
          <ul className="hidden lg:flex space-x-12">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li className="relative group">
              <a href="/FarmersPage" className="flex items-center">
                Our Services
                <div className="ml-2 flex items-center group">
                  <FaChevronUp className="hidden group-hover:block text-gray-600 w-3 h-5" />

                  <FaChevronDown className="group-hover:hidden text-gray-600 w-3 h-5" />
                </div>
              </a>
              <ul
                className={`dropdown absolute bg-gray-100 min-w-full shadow-lg z-20 hidden group-hover:block`}
              >
                <li className="p-4 hover:bg-green-600 transition">
                  <a className="whitespace-nowrap" href="/FarmersPage">
                    Konectar for Farmers
                  </a>
                </li>
                <li className="p-4 hover:bg-green-600 transition">
                  <a className="whitespace-nowrap" href="/BuyersPage">
                    Konectar for Buyers
                  </a>
                </li>
                <li className="p-4 hover:bg-green-600 transition">
                  <a className="whitespace-nowrap" href="/TruckersPage">
                    Konectar for Truckers
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
          </ul>

          <div className="hidden lg:flex items-center space-x-12">
            <a href="/WaitingListForm">
              <button
                type="button"
                className="bg-green-600 px-8 rounded-lg py-2 text-white text-sm md:text-base"
              >
                Join Waitlist
              </button>
            </a>
          </div>

          <div className="lg:hidden flex items-center cursor-pointer">
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

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="flex gap-4 flex-col mt-4 space-y-4 bg-gray-200 p-4 lg:hidden items-center text-center">
            <li>
              <a href="/" className="block w-full">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="block w-full">
                About
              </a>
            </li>
            <li className="w-full group">
              <div className="flex items-center justify-center cursor-pointer w-full">
                <a
                  href="/FarmersPage"
                  className="flex items-center space-x-2 w-full justify-center"
                >
                  <span>Our Services</span>
                  <FaChevronDown className="text-gray-600 w-4 h-4 group-hover:rotate-180 transition-transform" />
                </a>
              </div>
              <ul className="mt-2 hidden group-hover:flex group-hover:flex-col group-hover:gap-2">
                <li>
                  <a href="/FarmersPage" className="block w-full">
                    Konectar for Farmers
                  </a>
                </li>
                <li>
                  <a href="/BuyersPage" className="block w-full">
                    Konectar for Buyers
                  </a>
                </li>
                <li>
                  <a href="/TruckersPage" className="block w-full">
                    Konectar for Truckers
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="/blog" className="block w-full">
                Blog
              </a>
            </li>
            <li className="w-full">
              <a href="/WaitingListForm" className="block w-full">
                <button
                  type="button"
                  className="bg-green-600 py-2 px-4 rounded-lg text-white"
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
