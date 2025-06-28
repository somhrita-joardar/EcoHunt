import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Flag, Target, Trophy, User, LogOut } from "lucide-react";

const navItems = [
  { name: "Dashboard", icon: <Home size={18} />, path: "/dashboard" },
  { name: "Missions", icon: <Target size={18} />, path: "/mission" },
  { name: "Submit Flag", icon: <Flag size={18} />, path: "/submitflag" },
];

const Sidebar = ({ children }) => {
  const location = useLocation();

  return (
    <div className="flex h-screen">
      {/* Sidebar Navigation */}
      <div className="w-64 bg-green-100 text-green-900 p-6 flex flex-col justify-between">
        <div>
          {/* Logo */}
          <h1 className="text-2xl font-bold mb-8 text-green-700">🌿 EcoHunt</h1>

          {/* Navigation */}
          <nav className="space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg ${
                  location.pathname === item.path
                    ? "bg-green-500 text-white"
                    : "hover:bg-green-200"
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Logout */}
        <div>
          <button className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-red-100 text-red-600 w-full">
            <LogOut size={18} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 overflow-y-auto p-8">{children}</main>
    </div>
  );
};

export default Sidebar;
