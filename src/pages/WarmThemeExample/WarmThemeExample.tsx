import React from 'react';

 const WarmThemeExample: React.FC = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* 標題 */}
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-bold heading-gradient animate-glow">
            暖色系主題
          </h1>
          <p className="text-xl text-neutral-600">
            溫暖、活力、充滿能量的設計系統
          </p>
        </div>

        <div className="divider my-8"></div>

        {/* 顏色展示 */}
        <div className="card-gradient">
          <h2 className="text-3xl font-bold text-primary-700 mb-6">🎨 顏色系統</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="text-center space-y-2">
              <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl mx-auto shadow-warm-lg"></div>
              <p className="font-semibold text-neutral-700">橘色</p>
              <p className="text-sm text-neutral-500">主色調</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-24 h-24 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-2xl mx-auto shadow-warm-lg"></div>
              <p className="font-semibold text-neutral-700">琥珀</p>
              <p className="text-sm text-neutral-500">次要色</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-24 h-24 bg-gradient-to-br from-accent-400 to-accent-600 rounded-2xl mx-auto shadow-warm-lg"></div>
              <p className="font-semibold text-neutral-700">珊瑚紅</p>
              <p className="text-sm text-neutral-500">強調色</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-24 h-24 bg-gradient-to-br from-success-400 to-success-600 rounded-2xl mx-auto shadow-warm-lg"></div>
              <p className="font-semibold text-neutral-700">暖綠</p>
              <p className="text-sm text-neutral-500">成功</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-24 h-24 bg-gradient-to-br from-warning-400 to-warning-600 rounded-2xl mx-auto shadow-warm-lg"></div>
              <p className="font-semibold text-neutral-700">金黃</p>
              <p className="text-sm text-neutral-500">警告</p>
            </div>
          </div>
        </div>

        {/* 按鈕展示 */}
        <div className="card">
          <h2 className="text-3xl font-bold text-primary-700 mb-6">🔘 按鈕樣式</h2>
          <div className="flex flex-wrap gap-4">
            <button className="btn btn-primary">
              主要按鈕
            </button>
            <button className="btn btn-secondary">
              次要按鈕
            </button>
            <button className="btn btn-accent">
              強調按鈕
            </button>
            <button className="btn btn-outline">
              輪廓按鈕
            </button>
            <button className="btn btn-ghost">
              幽靈按鈕
            </button>
          </div>
        </div>

        {/* 漸層背景卡片 */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card hover:shadow-warm-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center text-3xl mb-4 shadow-warm">
              🔥
            </div>
            <h3 className="text-2xl font-bold text-primary-700 mb-2">熱情</h3>
            <p className="text-neutral-600">充滿活力與溫暖的設計</p>
            <div className="mt-4">
              <span className="badge badge-primary">熱門</span>
            </div>
          </div>

          <div className="card hover:shadow-warm-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-2xl flex items-center justify-center text-3xl mb-4 shadow-warm">
              ✨
            </div>
            <h3 className="text-2xl font-bold text-secondary-700 mb-2">創新</h3>
            <p className="text-neutral-600">現代化的用戶體驗</p>
            <div className="mt-4">
              <span className="badge badge-secondary">推薦</span>
            </div>
          </div>

          <div className="card hover:shadow-warm-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-success-400 to-success-600 rounded-2xl flex items-center justify-center text-3xl mb-4 shadow-warm">
              🎯
            </div>
            <h3 className="text-2xl font-bold text-success-700 mb-2">目標</h3>
            <p className="text-neutral-600">專注於用戶需求</p>
            <div className="mt-4">
              <span className="badge badge-success">活躍</span>
            </div>
          </div>
        </div>

        {/* 表單 */}
        <div className="card">
          <h2 className="text-3xl font-bold text-primary-700 mb-6">📝 表單元素</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                電子郵件
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="input"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                訊息內容
              </label>
              <textarea
                placeholder="輸入您的訊息..."
                className="input"
                rows={4}
              />
            </div>
            <button className="btn btn-primary w-full">
              送出表單
            </button>
          </div>
        </div>

        {/* 漸層背景區塊 */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-warm p-12 text-white shadow-warm-xl">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4">準備好開始了嗎？</h2>
            <p className="text-lg mb-6 text-orange-100">
              使用我們溫暖而充滿活力的設計系統，打造令人印象深刻的用戶體驗。
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold hover:bg-orange-50 transition-all transform hover:scale-105">
                立即開始
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all">
                了解更多
              </button>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl"></div>
        </div>

      </div>
    </div>
  );
};


export default  WarmThemeExample