# 使用 Node.js 官方映像作為基礎映像
FROM node:22 as build

# 設定工作目錄
WORKDIR /app

# 複製 package.json 和 package-lock.json
COPY package*.json ./

# 安裝依賴套件
RUN npm ci --only=production=false

# 複製所有原始碼
COPY . .

# 建構生產版本
RUN npm run build

# 使用 nginx 作為生產環境的 web 伺服器
FROM nginx:alpine

# 從建構階段複製編譯好的檔案到 nginx
COPY --from=build /app/dist /usr/share/nginx/html

# 複製 nginx 配置（稍後會建立）
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 暴露 80 埠
EXPOSE 80

# 啟動 nginx
CMD ["nginx", "-g", "daemon off;"]