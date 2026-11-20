/** 联系方式区块：邮箱、GitHub 与社交媒体链接，对应 PRD.md 的联系方式要求 */

/** 联系方式配置：替换为你自己的链接即可 */
const contactLinks = [
  { label: '邮箱', href: 'mailto:hello@example.com' },
  { label: 'GitHub', href: 'https://github.com/' },
  { label: '微博', href: 'https://weibo.com/' },
]

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-5 py-20">
      <h2 className="mb-4 text-3xl font-bold">联系方式</h2>
      <p className="text-muted">有想法或机会想聊聊？欢迎通过以下方式联系我。</p>

      <ul className="mt-8 flex flex-wrap gap-3">
        {contactLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className="inline-block rounded-full border border-line bg-surface px-5 py-2.5 text-sm transition-colors hover:border-accent hover:text-accent"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
