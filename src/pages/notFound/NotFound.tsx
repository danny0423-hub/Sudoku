import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-red-500 to-orange-600">
      <div className="bg-white p-10 rounded-lg shadow-2xl text-center">
        <h1 className="text-8xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">
          找不到頁面
        </h2>
        <p className="text-gray-600 mb-8">
          抱歉，您訪問的頁面不存在
        </p>
        <Link
          to="/"
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition"
        >
          返回首頁
        </Link>
      </div>
    </div>
  );
};

export default NotFound;