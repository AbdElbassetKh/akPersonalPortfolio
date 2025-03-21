"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, Github, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { cn } from "@/lib/utils"

export type Project = {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl: string
  githubUrl: string
  featured: boolean
}

export const projects: Project[] = [
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
    tags: ["UX/UI design", "Full-Stack", "React", "Node.js", "Figma"],
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
  },
  {
    id: "project-4",
    title: "Computer Parts Exhibition | Website",
    description: "A full-scale design and development of an immersive website for the Computer Parts 3D Exhibition, featuring interactive 3D showcases of cutting-edge hardware.",
    image: "./Ex.png",
    tags: ["UX/UI", "Full-Stack", "Next.js", "3d"],
    demoUrl: "https://csa-exibition.vercel.app",
    githubUrl: "https://github.com/AbdElbassetKh/CSA-EXIBITION",
    featured: false
  },
  {
    id: "project-5",
    title: "Computer Science and Automation Club | Visual Identity",
    description: "A complete strategic visual identity redesign for the Computer Science and Automation Club, enhancing its recognition within academic and tech communities.",
    image: "./CSA.jpg",
    tags: ["Branding", "Visual Identity", "Adobe Illustrator"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false
  }
]

const categories = ["All", "Branding", "UX/UI Design", "Full-Stack", "Mobile"]

export default function ProjectsPage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 6

  const isDevelopmentProject = (tags: string[]) => {
    const developmentTags = ["Full-Stack", "React", "Node.js", "Next.js", "Google Maps API", "3d"]
    return tags.some(tag => developmentTags.includes(tag))
  }

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeCategory === "All" ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(activeCategory.toLowerCase())
      )
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      )
    return matchesCategory && matchesSearch
  })

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  )

  return (
    <>
      <Navbar />
      <div className="pt-24 pb-20 bg-gradient-to-b from-background to-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge variant="outline" className="mb-4">Projects</Badge>
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
              My Projects
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              A showcase of my work across branding, UX/UI design, and full-stack development.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-full sm:w-64"
                />
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={activeCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory(category)}
                    className="rounded-full"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}

          {totalPages > 1 && (
            <div className="flex justify-center gap-4 mt-12">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              <span className="text-muted-foreground">
                Page {currentPage} of {totalPages}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}