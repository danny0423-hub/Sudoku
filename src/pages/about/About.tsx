import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-500 to-teal-600">
      <div className="bg-white p-10 rounded-lg shadow-2xl max-w-2xl">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
          關於我們dwdqw
        </h1>
        <p className="text-gray-600 text-lg mb-4">
          這是一個完整的現代化前端開發環境，包含：
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
          <li>⚛️ React 18 - 使用者介面函式庫</li>
          <li>🔄 Redux Toolkit - 狀態管理</li>
          <li>📘 TypeScript - 型別安全</li>
          <li>📦 Webpack - 模組打包工具</li>
          <li>🎨 Tailwind CSS - 實用優先的 CSS 框架</li>
          <li>🧭 React Router - 路由管理</li>
          <li>🧪 Jest + Testing Library - 單元測試</li>
          <li>🚀 GitHub Actions - CI/CD 自動化</li>
        </ul>
        <div className="flex gap-4 justify-center">
          <Link
            to="/"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition"
          >
            返回首頁
          </Link>
          <Link
            to="/counter"
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg transition"
          >
            前往計數器
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;