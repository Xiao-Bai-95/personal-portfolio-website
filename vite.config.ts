import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // React 插件 + Tailwind CSS Vite 插件（v4 无需 PostCSS 配置）
  plugins: [react(), tailwindcss()],
  // 部署到云端时允许反向代理域名访问，否则 Vite 会拒绝请求
  server: {
    host: '0.0.0.0',
    allowedHosts: true,
    // 优先监听平台注入的 PORT（沙箱用 3000），本地开发默认 5173
    port: Number(process.env.PORT) || 5173,
  },
})
