/**
 * 技能数据
 * 使用数组存储，方便后续添加和修改（依据 TECH_DESIGN.md 的数据管理约定）。
 */

export interface SkillGroup {
  /** 分类名称，例如「前端」 */
  category: string
  /** 该分类下的技能列表 */
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: '前端',
    skills: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
  },
  {
    category: '样式与动画',
    skills: ['Tailwind CSS', 'CSS Animations', 'Framer Motion'],
  },
  {
    category: '工具与协作',
    skills: ['Git', 'npm', 'VS Code'],
  },
]
