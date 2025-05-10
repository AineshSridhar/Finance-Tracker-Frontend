import React, { useState } from "react";
import { X, Menu } from "lucide-react";

const Navbar = ({sidebarOpen, setSidebarOpen}) => {

  return (
    <>
      {/* Top Navbar */}
      <nav className="flex justify-between items-center py-4 px-4 font-bold text-2xl bg-white shadow-md text-blue-500">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-xl cursor-pointer"
        >
        <Menu size={28} />
        </button>

        <h1 className="mx-auto">Finance Tracker</h1>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md p-6 transform transition-transform duration-300 z-50 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Menu</h2>
          <button className="cursor-pointer" onClick={() => setSidebarOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <ul className="space-y-4">
          <li><a href="/" className="block hover:text-blue-600">Dashboard</a></li>
          <li><a href="#" className="block hover:text-blue-600">Logout</a></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
