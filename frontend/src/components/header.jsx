import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FiShoppingCart, FiHeart, FiUser, FiPlus, FiSearch } from "react-icons/fi";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/buy", label: "Buy" },
  { to: "/sell", label: "Sell" },
  { to: "/donate", label: "Donate" },
  { to: "/rent", label: "Rent" },
];

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-30 backdrop-blur bg-white/80 border-b border-gray-100 shadow-sm">
      <div className="bg-gradient-to-r from-blue-50 via-white to-orange-50 text-sm text-slate-800/80">
        <div className="container flex items-center justify-between py-2">
          <span className="pill">Swap easier. Rent smarter. Donate faster.</span>
          <div className="hidden sm:flex items-center gap-4 text-sm font-medium text-gray-600">
            <Link to="/help-center" className="hover:text-orange-500 transition">Help</Link>
            <Link to="/order-tracking" className="hover:text-orange-500 transition">Track</Link>
          </div>
        </div>
      </div>

      <div className="container flex items-center gap-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img src="/assets/icons/logo.png" alt="SwapHub" className="h-12 w-12 rounded-full shadow-sm" />
          <div>
            <div className="text-lg font-bold text-slate-900">SwapHub</div>
            <p className="text-xs text-gray-500">Buy • Rent • Donate</p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-2 px-3 py-2 bg-white rounded-full border border-gray-200 shadow-sm">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full text-sm font-semibold transition ${
                  isActive ? "bg-orange-100 text-orange-600" : "text-gray-600 hover:text-slate-900"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex-1 hidden md:flex items-center">
          <div className="w-full relative">
            <input
              type="text"
              placeholder="Search items, categories, or descriptions..."
              className="w-full h-12 pl-4 pr-12 rounded-full border border-gray-200 bg-white/90 shadow-inner focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
            <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        <div className="flex items-center gap-3 ml-auto">
          <Link
            to="/sell"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold shadow-md hover:shadow-lg transition"
          >
            <FiPlus />
            List an item
          </Link>
          <Link to="/buy" className="hidden sm:flex items-center justify-center h-11 w-11 rounded-full bg-white border border-gray-200 shadow-sm hover:border-orange-300 transition">
            <FiShoppingCart className="text-xl text-slate-900" />
          </Link>
          <Link to="/wishlist" className="hidden sm:flex items-center justify-center h-11 w-11 rounded-full bg-white border border-gray-200 shadow-sm hover:border-orange-300 transition">
            <FiHeart className="text-xl text-slate-900" />
          </Link>
          <Link to="/login" className="flex items-center justify-center h-11 w-11 rounded-full bg-slate-900 text-white font-semibold shadow-md hover:bg-slate-800 transition">
            <FiUser />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
