import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-gray-800 text-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-2xl font-bold">
              My App
            </Link>
            <div className="flex gap-6">
              <Link
                to="/"
                className={`hover:text-blue-400 transition ${
                  isActive('/') ? 'text-blue-400 font-semibold' : ''
                }`}
              >
                首頁
              </Link>
              <Link
                to="/counter"
                className={`hover:text-blue-400 transition ${
                  isActive('/counter') ? 'text-blue-400 font-semibold' : ''
                }`}
              >
                計數器
              </Link>
              <Link
                to="/about"
                className={`hover:text-blue-400 transition ${
                  isActive('/about') ? 'text-blue-400 font-semibold' : ''
                }`}
              >
                關於
              </Link>
              <Link
                to="/warm-theme"
                className={`hover:text-blue-400 transition ${
                  isActive('/warm-theme') ? 'text-blue-400 font-semibold' : ''
                }`}
              >
                暖色系主題
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2025 My App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;