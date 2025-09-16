import { motion } from "framer-motion"
import { ExternalLink, Github, Users, Code } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Njadwil.com",
      description:
        "A comprehensive scheduling and management platform that helps businesses streamline appointment booking with automated notifications and calendar integration.",
      liveUrl: "https://njadwil.com",
      // githubUrl: "#",
      status: "Live",
      type: "Web Application",
      features: [
        "Real-time Scheduling",
        "Email Notifications",
        "Calendar Integration",
        "User Management",
      ],
    },
    {
      id: 2,
      title: "DppManager.com",
      description:
        "A robust project management solution designed for teams to collaborate effectively with task tracking, file sharing, and progress monitoring.",
      liveUrl: "https://dppmanager.com",
      // githubUrl: "#",
      status: "Live",
      type: "SaaS Platform",
      features: [
        "Task Management",
        "Team Collaboration",
        "File Sharing",
        "Analytics Dashboard",
      ],
    },
    {
      id: 3,
      title: "Todo App",
      description:
        "A modern, responsive todo application with drag-and-drop functionality, local storage, and a clean minimalist design for productivity.",
      liveUrl: "#",
      // githubUrl: "#",
      status: "Completed",
      type: "Personal Project",
      features: [
        "Drag & Drop",
        "Local Storage",
        "Responsive Design",
        "Task Categories",
      ],
    },
    {
      id: 4,
      title: "Weather API App",
      description:
        "An elegant weather application that provides real-time weather data, forecasts, and visualizations using modern API integration.",
      liveUrl: "#",
      // githubUrl: "#",
      status: "Completed",
      type: "API Integration",
      features: [
        "Real-time Data",
        "Weather Forecast",
        "Location-based",
        "Interactive Charts",
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="py-20 relative">
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
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden p-6 flex flex-col justify-between">
                {/* Header */}
                <CardHeader className="p-0 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <Badge
                      variant={
                        project.status === "Live" ? "default" : "secondary"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>

                {/* Content */}
                <CardContent className="space-y-6 p-0">
                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-semibold mb-2 flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      Key Features
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-4">
                    <Button
                      size="sm"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                      className="flex-1 group/btn"
                      disabled={project.liveUrl === "#"}
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-45 transition-transform" />
                      Live Demo
                    </Button>
                    {/* <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                      className="flex-1"
                      disabled={project.githubUrl === "#"}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button> */}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <Button
            size="lg"
            variant="outline"
            onClick={() =>
              window.open("https://github.com/jalilriaz", "_blank")
            }
            className="hover-scale"
          >
            <Github className="w-4 h-4 mr-2" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
