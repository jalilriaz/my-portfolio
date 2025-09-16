import { motion } from "framer-motion"
import { Download, FileText, Award, Briefcase } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const Resume = () => {
  const handleDownloadResume = () => {
    // Create a temporary download link for the sample resume
    const link = document.createElement("a")
    link.href = "/resume-sample.pdf" // This will be replaced with actual resume
    link.download = "Jalil-Riaz-Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const experiences = [
    {
      title: "Frontend Developer",
      company: "Freelance",
      period: "2023 - Present",
      description:
        "Developing modern web applications using React.js, TypeScript, and modern CSS frameworks.",
    },
    {
      title: "Web Developer",
      company: "Personal Projects",
      period: "2022 - 2023",
      description:
        "Built various web applications including Najadwil.com and DppManager.com with focus on user experience.",
    },
  ]

  const education = [
    {
      degree: "Self-Taught Developer",
      institution: "Online Platforms",
      period: "2021 - Present",
      description:
        "Continuous learning through online courses, documentation, and hands-on projects.",
    },
  ]

  // const achievements = [
  //   'Successfully launched 2 live web applications',
  //   'Proficient in modern React.js development',
  //   'Expert in responsive web design',
  //   'Strong foundation in JavaScript ES6+'
  // ];

  return (
    <section id="resume" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Resume
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            My professional journey and qualifications
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              onClick={handleDownloadResume}
              className="bg-primary hover:bg-primary/90 text-primary-foreground group hover-scale glow-primary"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <h3 className="text-2xl font-bold flex items-center">
                  <Briefcase className="mr-3 h-6 w-6 text-primary" />
                  Experience
                </h3>
              </CardHeader>
              <CardContent className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-l-2 border-primary/30 pl-4 pb-4 last:pb-0"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-lg font-semibold">{exp.title}</h4>
                      <span className="text-sm text-primary font-medium">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-primary font-medium mb-2">
                      {exp.company}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {exp.description}
                    </p>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <h3 className="text-2xl font-bold flex items-center">
                  <FileText className="mr-3 h-6 w-6 text-primary" />
                  Education
                </h3>
              </CardHeader>
              <CardContent className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-l-2 border-primary/30 pl-4 pb-4 last:pb-0"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-lg font-semibold">{edu.degree}</h4>
                      <span className="text-sm text-primary font-medium">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-primary font-medium mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {edu.description}
                    </p>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Resume Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="max-w-md mx-auto p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border border-primary/20">
            <FileText className="w-16 h-16 text-primary mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Complete Resume</h4>
            <p className="text-muted-foreground mb-6">
              Download my complete resume with detailed information about my
              experience, projects, and skills.
            </p>
            <Button
              onClick={handleDownloadResume}
              variant="outline"
              className="hover-scale"
            >
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume
