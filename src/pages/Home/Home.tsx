import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-10 rounded-lg shadow-2xl">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
          歡迎
        </h1>
        <p className="text-gray-600 text-center mb-8">
          這是一個使用 React + Redux + TypeScript + React Router 的專案test branch
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/counter"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition"
          >
            前往計數器
          </Link>
          <Link
            to="/about"
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg transition"
          >
            關於我們
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;