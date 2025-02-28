"use client"

import { motion } from "framer-motion"
import { 
  Code, 
  Palette, 
  Database, 
  Layers, 
  Smartphone, 
  Lightbulb, 
  Rocket, 
  LineChart, 
  Zap 
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

const skills = [
  {
    category: "Design",
    icon: <Palette className="h-6 w-6" />,
    items: ["UI/UX Design", "Brand Strategy", "Design Systems", "Wireframing", "Prototyping", "User Research"]
  },
  {
    category: "Frontend",
    icon: <Code className="h-6 w-6" />,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Qwik"]
  },
  {
    category: "Backend",
    icon: <Database className="h-6 w-6" />,
    items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"]
  },
  {
    category: "Other",
    icon: <Layers className="h-6 w-6" />,
    items: ["Git", "CI/CD", "Performance Optimization", "SEO", "Accessibility", "Testing"]
  }
]

const approaches = [
  {
    title: "Strategic Thinking",
    description: "Starting with the big picture to ensure all design and development decisions align with business goals.",
    icon: <Lightbulb className="h-6 w-6 text-primary" />
  },
  {
    title: "User-Centered",
    description: "Placing the user at the heart of every design decision to create intuitive, accessible experiences.",
    icon: <Smartphone className="h-6 w-6 text-primary" />
  },
  {
    title: "Performance-Driven",
    description: "Optimizing for speed, efficiency, and scalability to deliver exceptional digital experiences.",
    icon: <Rocket className="h-6 w-6 text-primary" />
  },
  {
    title: "Data-Informed",
    description: "Using analytics and user feedback to continuously improve and refine digital products.",
    icon: <LineChart className="h-6 w-6 text-primary" />
  }
]

export function SkillsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4">Expertise</Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
            My Skillset
          </h2>
          <p className="text-muted-foreground text-lg">
            A comprehensive toolkit that enables me to deliver end-to-end digital solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-card rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <Badge key={item} variant="secondary" className="text-sm">
                    {item}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* My Approach Section */}
        <div className="mt-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="text-2xl font-bold font-montserrat mb-4">
              My Approach
            </h3>
            <p className="text-muted-foreground">
              I combine technical expertise with strategic thinking to create digital solutions that drive results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approaches.map((approach, index) => (
              <motion.div
                key={approach.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border hover:border-primary/50 transition-all"
              >
                <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {approach.icon}
                </div>
                <h4 className="font-medium text-lg mb-2">{approach.title}</h4>
                <p className="text-muted-foreground text-sm">{approach.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}