/**
 * 项目数据
 * 每个项目包含：名称、截图、简介、技术栈与链接（依据 PRD.md 的核心功能）。
 * 使用数组存储，方便后续添加和修改（依据 TECH_DESIGN.md 的数据管理约定）。
 */

export interface Project {
  /** 稳定且唯一的标识，用作列表 key */
  id: string
  /** 项目名称 */
  name: string
  /** 项目截图地址 */
  image: string
  /** 简短描述 */
  description: string
  /** 技术栈标签 */
  techStack: string[]
  /** 项目链接 */
  link: string
}

export const projects: Project[] = [
  {
    id: 'portfolio-site',
    name: '个人作品集网站',
    image: '/placeholder.svg',
    description: '使用 React、TypeScript 与 Tailwind CSS 构建的响应式个人作品集。',
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    link: '#',
  },
  {
    id: 'sample-project',
    name: '示例项目',
    image: '/placeholder.svg',
    description: '在这里填写你的项目简介，替换这份示例数据即可。',
    techStack: ['Vite', 'React'],
    link: '#',
  },
]
