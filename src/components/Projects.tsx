/** 项目展示区块：项目卡片列表，对应 PRD.md 的项目展示要求 */

import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-5 py-20">
      <h2 className="mb-8 text-3xl font-bold">项目展示</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.id}
            className="overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-accent"
          >
            {/* 图片懒加载，符合 AGENTS.md 的性能优化要求 */}
            <img
              src={project.image}
              alt={`${project.name} 项目截图`}
              loading="lazy"
              className="aspect-video w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-line bg-elevated px-2.5 py-1 text-xs text-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              {/* 所有链接均可点击，新标签页打开并加安全属性 */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block text-sm font-medium text-accent transition-colors hover:text-accent-soft"
              >
                查看项目 →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
