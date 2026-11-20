/** 首页区块：大标题 + 简介 + 头像，对应 PRD.md 的首页要求 */

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-10 px-5 py-20 md:flex-row md:justify-between md:py-32"
    >
      <div className="flex-1 text-center md:text-left">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-accent">
          你好，我是
        </p>
        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
          一名 <span className="text-gradient">前端开发者</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted md:mx-0">
          专注于前端开发，热衷于用代码雕琢精致、流畅的 Web 体验。熟悉 React、
          TypeScript 与现代前端工程化，喜欢把复杂的问题拆解成简洁优雅的方案。
        </p>
        <a
          href="#projects"
          className="bg-gradient-accent mt-8 inline-block rounded-full px-6 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-85"
        >
          查看我的作品
        </a>
      </div>

      {/* 头像使用懒加载，符合 AGENTS.md 的性能优化要求 */}
      <img
        src="/avatar.png"
        alt="开发者头像"
        loading="lazy"
        className="h-40 w-40 rounded-full border border-line object-cover shadow-2xl md:h-56 md:w-56"
      />
    </section>
  )
}
