/** 应用根组件：按页面顺序组合各功能区块（结构依据 TECH_DESIGN.md） */

import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-paper">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
