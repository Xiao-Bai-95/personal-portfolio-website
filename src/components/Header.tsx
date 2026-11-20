/** 顶部导航栏：桌面端横向菜单，移动端自动换行，均使用锚点平滑跳转 */

/** 导航项配置：集中管理，方便增删 */
const navItems = [
  { label: '首页', href: '#home' },
  { label: '关于我', href: '#about' },
  { label: '项目', href: '#projects' },
  { label: '联系', href: '#contact' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-ink/80 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-5 py-4"
        aria-label="主导航"
      >
        <a href="#home" className="text-lg font-semibold tracking-tight">
          My<span className="text-gradient">Portfolio</span>
        </a>

        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="transition-colors hover:text-paper"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
