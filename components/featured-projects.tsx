"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type Project = {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl: string
  githubUrl: string
  featured: boolean
}

const projects: Project[] = [
  {
    id: "project-1",
    title: "British Academy Online | Visual Identity",
    description: "A complete strategic brand and visual identity design for British Academy Online, an accredited educational platform by the College of London. This project enhanced the academy’s digital presence, delivering internationally recognized diplomas with certificates issued from Britain.",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ba6b79159753379.63a4b88cca2b9.jpg",
    tags: ["Branding", "Visual Identity", "Adobe Illustrator"],
    demoUrl: "https://www.behance.net/gallery/159753379/British-Academy-Online-Visual-Identity",
    githubUrl: "#",
    featured: true
  },
  {
    id: "project-2",
    title: "Computer Science and Automation Specialization | Website",
    description: "A website design for the Computer Science and Automation Specialization, a program that offers a comprehensive curriculum in computer science and automation. The website features a clean, modern design with easy navigation and user-friendly interface.",
    image: "./Project2.png",
    tags: ["UX/UI design","Full-Stack", "React", "Node.js", "Figma"],
    demoUrl: "https://csa-site.vercel.app/",
    githubUrl: "https://github.com/AbdElbassetKh/CSA-Site",
    featured: true
  },
  {
    id: "project-3",
    title: "London international college of graduate studies | Visual Identity",
    description: "A complete visual identity overhaul for the London International College of Graduate Studies, elevating its global academic presence..",
    image: "./LICGS.jpg",
    tags: ["Branding", "Visual Identity", "Adobe Illustrator"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true
  }
]

export function FeaturedProjects() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

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
          {projects.map((project) => (
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
                        View Project
                        <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Button>
                    </motion.div>
                  </Link>
                  <Link href={project.githubUrl}>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button size="sm" variant="outline">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </Button>
                    </motion.div>
                  </Link>
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