"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X, Code, Palette, User, FileText, Send, Moon, Sun } from "lucide-react"

function DirectThemeToggle() {
  const { theme, setTheme } = useTheme()
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

const navItems = [
  { name: "Home", path: "/", icon: <Code className="h-4 w-4 mr-2" /> },
  { name: "Projects", path: "/projects", icon: <Palette className="h-4 w-4 mr-2" /> },
  { name: "About", path: "/about", icon: <User className="h-4 w-4 mr-2" /> },
  { name: "Blog", path: "/blog", icon: <FileText className="h-4 w-4 mr-2" /> },
  { name: "Contact", path: "/contact", icon: <Send className="h-4 w-4 mr-2" /> },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
                    {/* Logo (Far Right) */}
                    <div className="flex-shrink-0 h-16 flex items-center">
            <Link href="/" className="relative h-12 w-32 flex items-center">
              <Image 
                src="/logo.svg" 
                alt="Logo"
                fill
                sizes="(max-width: 128px) 100vw, 128px"
                className="object-contain"
                priority
                quality={90}
              />
            </Link>
          </div>

          {/* Desktop Navigation (Centered) */}
          <nav className="hidden md:flex items-center justify-center flex-grow">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    pathname === item.path
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                  )}
                >
                  <span className="flex items-center">
                    {item.icon}
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </nav>

            {/* Theme Toggle (Far Left) */}
            <div className="flex-shrink-0 flex items-center">
            <DirectThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="ml-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    pathname === item.path
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="flex items-center">
                    {item.icon}
                    {item.name}
                  </span>
                </Link>
              ))}
              <div className="px-3 py-2 flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">Theme</span>
                <DirectThemeToggle />
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}