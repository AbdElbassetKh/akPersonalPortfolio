"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { 
  Calendar, 
  Award, 
  Briefcase, 
  GraduationCap, 
  ArrowRight 
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const experiences = [
  {
    title: "Brand Identity Designer & Graphic Designer",
    company: "London International College Of Graduate Studies",
    period: "2025 - Present",
    description: "I developed the brand identity for the London International College of Graduate Studies, designing marketing materials and innovative graphics to strengthen its global academic presence."
  },
  {
    title: "Design and Brand Identity Development Team Leader",
    company: "Computer Science and Automation Scientific Club",
    period: "2024 - 2025",
    description: "Directed the design and brand identity strategy for the Computer Science and Automation Scientific Club, leading a team of designers in creating innovative visual systems and branding solutions. Implemented streamlined design processes and identity frameworks that enhanced project delivery efficiency and elevated the club’s digital and academic presence."
  },
  {
    title: "Graphic Designer",
    company: "Bunian Volunteer Project",
    period: "2021 - 2024",
    description: "Social media designs, advertisements and posters for the Binyan Volunteer Project to enrich Arabic content and spread awareness and sound thinking among young people.."
  },
  {
    title: "Graphic Designer",
    company: "Tanween Guelma Association",
    period: "2019 - 2021",
    description: "Developing the identity and designing publications, advertisements and posters for the Tanween Guelma Cultural Association, and contributing to the Wikistage Guelma event."
  }
]

const education = [
  {
    degree: "Dual Bachelor in Computer Science and Automation",
    institution: "Badji Mokhtar University - Annaba",
    period: "2024 - 2026",
    description: "A comprehensive program combining core principles of computer science with automation technologies, emphasizing software development, system integration, and intelligent control systems. The curriculum includes advanced topics in programming, algorithms, robotics, and industrial automation, preparing students for innovative roles in technology and engineering fields."
  }
]

const technologies = [
  {
    name: "No Code Development",
    description: "Exploring no-code development platforms to streamline the development process and create scalable web applications without writing code."
  },
  {
    name: "AI Integration",
    description: "Implementing AI-driven personalization and content generation to create more dynamic user experiences."
  },
  {
    name: "3D Web Experiences",
    description: "Creating immersive 3D web experiences using Three.js and WebGL to enhance user engagement and interaction."
  }
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      
      <div className="pt-24 pb-20 bg-gradient-to-b from-background to-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Badge variant="outline" className="mb-4">About Me</Badge>
                <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
                  Designer & Developer of Comprehensive Digital Solutions
                </h1>
                <p className="text-muted-foreground text-lg mb-6">
                  I'm a multidisciplinary designer and developer with over 4 years of experience 
                  creating digital products that combine strategic thinking, beautiful design, 
                  and robust technology.
                </p>
                <p className="text-muted-foreground text-lg mb-6">
                  My approach integrates strategic branding, user-centered design, and full-stack 
                  development to deliver comprehensive solutions that drive business growth and 
                  enhance user experiences.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/projects">
                    <Button>
                      View My Work
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline">Get In Touch</Button>
                  </Link>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
                  <Image
                    src="./Logo.jpg"
                    alt="Abd Elbasset Khettabi - Designer & Developer"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-lg border border-border shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Experience</p>
                      <p className="text-muted-foreground">+4 Years</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 bg-card p-6 rounded-lg border border-border shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Projects</p>
                      <p className="text-muted-foreground">+20 Completed</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="mb-20">
              <div className="text-center mb-12">
                <Badge variant="outline" className="mb-4">Experience</Badge>
                <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
                  Professional Journey
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  My career path has allowed me to develop expertise across multiple disciplines,
                  from design to development.
                </p>
              </div>
              
              <div className="relative border-l border-border pl-8 ml-4 space-y-12">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="absolute -left-12 bg-primary/10 p-2 rounded-full border border-border">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div className="bg-card rounded-lg p-6 border border-border">
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                      <h3 className="text-xl font-bold mt-1 mb-1">{exp.title}</h3>
                      <p className="text-primary font-medium mb-3">{exp.company}</p>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="mb-20">
              <div className="text-center mb-12">
                <Badge variant="outline" className="mb-4">Education</Badge>
                <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
                  Academic Background
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  My educational foundation combines technical knowledge with design thinking.
                </p>
              </div>
              
              <div className="relative border-l border-border pl-8 ml-4 space-y-12">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="absolute -left-12 bg-primary/10 p-2 rounded-full border border-border">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                    <div className="bg-card rounded-lg p-6 border border-border">
                      <span className="text-sm text-muted-foreground">{edu.period}</span>
                      <h3 className="text-xl font-bold mt-1 mb-1">{edu.degree}</h3>
                      <p className="text-primary font-medium mb-3">{edu.institution}</p>
                      <p className="text-muted-foreground">{edu.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <div className="text-center mb-12">
                <Badge variant="outline" className="mb-4">Future</Badge>
                <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
                  Technologies I'm Exploring
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  I'm constantly learning and experimenting with emerging technologies to stay at the forefront of digital innovation.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-colors"
                  >
                    <h3 className="text-xl font-bold mb-3">{tech.name}</h3>
                    <p className="text-muted-foreground mb-4">{tech.description}</p>
                    <Link href="#" className="text-primary hover:underline">
                      Learn more →
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  )
}