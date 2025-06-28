// src/layout/Layout.jsx
import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-green-100 p-6 space-y-4">
        <h1 className="text-2xl font-bold text-green-700 mb-8">EcoHunt</h1>
        <nav className="space-y-3">
          <Link to="/dashboard" className="block text-gray-700 hover:text-green-700">Dashboard</Link>
          <Link to="/missions" className="block text-gray-700 hover:text-green-700">Missions</Link>
          <Link to="/submit-flag" className="block text-gray-700 hover:text-green-700">Submit Flag</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-green-50 overflow-y-auto">{children}</main>
    </div>
  );
};

export default Layout;
