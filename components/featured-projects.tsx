"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { projects, Project } from "@/app/projects/page" // استيراد projects و Project

export function FeaturedProjects() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  // دالة للتحقق مما إذا كان المشروع يتعلق بالتطوير
  const isDevelopmentProject = (tags: string[]) => {
    const developmentTags = ["Full-Stack", "React", "Node.js", "Next.js", "Google Maps API", "3d"]
    return tags.some(tag => developmentTags.includes(tag))
  }

  // تصفية المشاريع المفضلة فقط
  const featuredProjects = projects.filter(project => project.featured)

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4">Featured Work</Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
            Recent Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            A selection of my recent work across branding, UX/UI design, and full-stack development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="group relative bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-colors"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={cn(
                    "object-cover transition-transform duration-500",
                    hoveredId === project.id ? "scale-110" : "scale-100"
                  )}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              
              <div className="p-6 relative">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                
                <div className="flex items-center gap-3">
                  <Link href={project.demoUrl}>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button size="sm" className="group">
                        {isDevelopmentProject(project.tags) ? "Live Demo" : "View Project"}
                        <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Button>
                    </motion.div>
                  </Link>
                  {isDevelopmentProject(project.tags) && (
                    <Link href={project.githubUrl}>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button size="sm" variant="outline">
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </Button>
                      </motion.div>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/projects">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="lg">
                View All Projects
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  )
}