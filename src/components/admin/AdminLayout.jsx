import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-6 border-b">
          <h1 className="text-xl font-bold text-blue-600">Admin Panel</h1>
        </div>

        <nav className="p-4 space-y-2">
          <NavLink
            to="price-update"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md font-medium ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`
            }
          >
            Price Update
          </NavLink>

          <NavLink
            to="pdf-upload"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md font-medium ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`
            }
          >
            PDF Upload
          </NavLink>

          <NavLink
            to="project-upload"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md font-medium ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`
            }
          >
            Projects Upload
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Header */}
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">
            Admin Dashboard
          </h2>
          {/* <button className="text-sm bg-red-500 text-white px-4 py-1 rounded">
            Logout
          </button> */}
        </header>

        {/* Page Content */}
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
