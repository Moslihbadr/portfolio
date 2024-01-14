import About from "./components/About"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Navbar from "./components/navbar/Navbar"
import { LanguageProvider } from "./contexts/LanguageContext"

function App() {

  return (
    <LanguageProvider>
      <div className="container">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Hero />
        <Hero />
      </div>
    </LanguageProvider>
  )
}

export default App
