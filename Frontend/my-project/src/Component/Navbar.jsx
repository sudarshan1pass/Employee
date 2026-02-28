import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  const links = [
    { path: "/", label: "Home" },
    // { path: "/CreateForm", label: "Employee" },
    // { path: "/about", label: "About" },
  ];

  return (
    <>
      <nav className="bg-indigo-600 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <h1 className="text-xl font-bold">MyApp</h1>

            {/* Links */}
            <div className="flex gap-6">
              {links.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="hover:text-gray-200 transition"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <Outlet />
    </>
  );
};

export default Navbar;
