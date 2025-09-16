import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      level: 95,
      icon: "🌐",
      description: "Semantic markup and accessibility",
    },
    {
      name: "CSS",
      level: 90,
      icon: "🎨",
      description: "Responsive design and animations",
    },
    {
      name: "JavaScript",
      level: 88,
      icon: "⚡",
      description: "ES6+ and modern JavaScript",
    },
    {
      name: "React",
      level: 85,
      icon: "⚛️",
      description: "Hooks, Context, and state management",
    },
    {
      name: "Tailwind CSS",
      level: 92,
      icon: "🎯",
      description: "Utility-first CSS framework",
    },
    {
      name: "Bootstrap",
      level: 88,
      icon: "📱",
      description: "Responsive grid system",
    },
    {
      name: "MUI",
      level: 80,
      icon: "🔧",
      description: "Material-UI components",
    },
    {
      name: "Node.js",
      level: 70,
      icon: "🚀",
      description: "Backend development basics",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="skills" className="py-20 relative">
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
            Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <CardContent className="p-6 text-center">
                  {/* Icon */}
                  <div className="text-4xl mb-4 group-hover:animate-bounce">
                    {skill.icon}
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {skill.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4">
                    {skill.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="w-full bg-secondary rounded-full h-2 mb-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
                    />
                  </div>

                  {/* Percentage */}
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 1 }}
                    viewport={{ once: true }}
                    className="text-sm font-medium text-primary"
                  >
                    {skill.level}%
                  </motion.span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-6">Additional Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Git & GitHub",
              "Responsive Design",
              "API Integration",
              "Redux",
              "TypeScript",
              "Figma",
              "VS Code",
              "Chrome DevTools",
            ].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-secondary/50 backdrop-blur-sm rounded-full text-sm font-medium border border-border/50 hover:border-primary/50 transition-colors duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
