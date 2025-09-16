import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { Download, ArrowRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const Hero = () => {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleDownloadResume = () => {
    // Create a temporary download link for the sample resume
    const link = document.createElement("a")
    link.href = "/public/Jalil-Frontend Developer.pdf"
    link.download = "Jalil-Riaz-Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-hero opacity-10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow"></div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
          >
            Jalil Riaz
          </motion.h1>

          {/* Title with Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-6"
          >
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "React.js Enthusiast",
                2000,
                "UI/UX Designer",
                2000,
                "JavaScript Expert",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Skilled in HTML, CSS, JavaScript, Tailwind CSS, Bootstrap, MUI, and
            Node.js basics. I create beautiful, responsive, and user-friendly
            web applications with modern technologies.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={() => handleScrollToSection("#projects")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground group transition-all duration-300 hover-scale"
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={handleDownloadResume}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group transition-all duration-300 hover-scale"
            >
              <Download className="mr-2 h-4 w-4 group-hover:bounce" />
              Download Resume
            </Button>

            <Button
              size="lg"
              variant="secondary"
              onClick={() => handleScrollToSection("#contact")}
              className="hover-scale transition-all duration-300"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
