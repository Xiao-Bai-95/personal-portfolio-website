/** 页脚：版权信息，使用当前年份自动生成 */

// 在渲染之外计算年份，避免在组件渲染期间调用非纯函数
const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-5xl px-5 py-8 text-center text-sm text-muted">
        <p>© {currentYear} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  )
}
