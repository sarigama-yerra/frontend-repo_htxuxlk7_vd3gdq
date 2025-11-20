import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Testimonials />
        <Contact />
        <footer className="py-10 border-t border-black/10 dark:border-white/10">
          <div className="mx-auto max-w-7xl px-6 text-sm text-slate-600 dark:text-slate-400 flex items-center justify-between">
            <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
            <a href="#home" className="hover:text-blue-600 dark:hover:text-blue-400">Back to top ↑</a>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
