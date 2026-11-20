/** 关于我区块：详细介绍 + 技能列表，对应 PRD.md 的关于我要求 */

import { skillGroups } from '../data/skills'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-5 py-20">
      <h2 className="mb-8 text-3xl font-bold">关于我</h2>

      <p className="max-w-3xl leading-relaxed text-muted">
        在这里详细介绍你自己：你的背景、兴趣、擅长领域，以及你正在寻找什么样的机会。
        保持简洁，让内容自己说话。
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="rounded-2xl border border-line bg-surface p-6"
          >
            <h3 className="mb-4 text-sm font-semibold text-accent">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-line bg-elevated px-3 py-1 text-xs text-paper"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
