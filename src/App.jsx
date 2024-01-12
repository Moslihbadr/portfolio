import About from "./components/About"
import Hero from "./components/Hero"
import Navbar from "./components/navbar/Navbar"
import { LanguageProvider } from "./contexts/LanguageContext"

function App() {

  return (
    <LanguageProvider>
      <div className="container">
        <Navbar />
        <Hero />
        <About />
      </div>
    </LanguageProvider>
  )
}

export default App
