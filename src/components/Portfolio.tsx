import { useState, useEffect } from "react"
import Navigation from "./Navigation"
import Hero from "./Hero"
import Skills from "./Skills"
import Projects from "./Projects"
import Resume from "./Resume"
import Contact from "./Contact"
import Footer from "./Footer"

const Portfolio = () => {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches

    if (savedTheme) {
      setIsDark(savedTheme === "dark")
    } else {
      setIsDark(prefersDark)
    }
  }, [])

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.remove("light")
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
      document.documentElement.classList.add("light")
    }

    // Save theme preference
    localStorage.setItem("theme", isDark ? "dark" : "light")
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation isDark={isDark} toggleTheme={toggleTheme} />
      <Hero />
      <Skills />
      <Projects />
      {/* <Resume /> */}
      <Contact />
      <Footer />
    </div>
  )
}

export default Portfolio
