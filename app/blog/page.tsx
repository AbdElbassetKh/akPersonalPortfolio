"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

type BlogPost = {
  id: string
  title: string
  excerpt: string
  content: string
  image: string
  date: string
  readTime: string
  category: string
  slug: string
}

const blogPosts: BlogPost[] = [
  {
    id: "post-1",
    title: "The Intersection of Design and Development",
    excerpt: "Exploring how design thinking and development practices can work together to create better digital products.",
    content: "Full content here...",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1064&auto=format&fit=crop",
    date: "May 15, 2025",
    readTime: "5 min read",
    category: "Design",
    slug: "intersection-design-development"
  },
  {
    id: "post-2",
    title: "Building Accessible Web Applications",
    excerpt: "A comprehensive guide to creating web applications that are accessible to all users, including those with disabilities.",
    content: "Full content here...",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1170&auto=format&fit=crop",
    date: "April 28, 2025",
    readTime: "8 min read",
    category: "Development",
    slug: "building-accessible-web-applications"
  },
  {
    id: "post-3",
    title: "Strategic Branding for Digital Products",
    excerpt: "How to develop a strategic brand identity that resonates with your target audience and enhances your digital product.",
    content: "Full content here...",
    image: "https://images.unsplash.com/photo-1553484771-371a605b060b?q=80&w=1170&auto=format&fit=crop",
    date: "April 10, 2025",
    readTime: "6 min read",
    category: "Branding",
    slug: "strategic-branding-digital-products"
  },
  {
    id: "post-4",
    title: "The Future of Web Performance",
    excerpt: "Exploring emerging technologies and techniques for optimizing web performance in 2025 and beyond.",
    content: "Full content here...",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop",
    date: "March 22, 2025",
    readTime: "7 min read",
    category: "Development",
    slug: "future-web-performance"
  },
  {
    id: "post-5",
    title: "User Research Techniques for Better UX",
    excerpt: "Effective user research methods that can help you create more intuitive and user-friendly digital experiences.",
    content: "Full content here...",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1170&auto=format&fit=crop",
    date: "March 5, 2025",
    readTime: "9 min read",
    category: "UX",
    slug: "user-research-techniques"
  }
]

const categories = ["All", "Design", "Development", "Branding", "UX"]

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesCategory = activeCategory === "All" || post.category === activeCategory
    
    return matchesSearch && matchesCategory
  })

  return (
    <>
      <Navbar />
      
      <div className="pt-24 pb-20 bg-gradient-to-b from-background to-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge variant="outline" className="mb-4">Blog</Badge>
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
              Insights & Thoughts
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Sharing my knowledge and experiences in design, development, and digital strategy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
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
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-colors"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </Link>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge>{post.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <Link href={`/blog/${post.slug}`} className="block group">
                    <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  
                  <p className="text-muted-foreground text-sm mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.date}
                    </div>
                    
                    <Link href={`/blog/${post.slug}`} className="text-primary hover:underline flex items-center text-sm font-medium">
                      Read more
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No articles found matching your search criteria.</p>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </>
  )
}