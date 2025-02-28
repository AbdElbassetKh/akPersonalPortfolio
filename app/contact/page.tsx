"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { 
  Mail, 
  Send, 
  Github, 
  Linkedin, 
  Twitter,
  MapPin,
  Phone,
  LucideIcon 
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

type FormValues = z.infer<typeof formSchema>

// Reusable ContactInfo component
const ContactInfo = ({ 
  icon: Icon, 
  title, 
  content, 
  action 
}: { 
  icon: LucideIcon; 
  title: string; 
  content: string; 
  action?: { href: string; label: string; }; 
}) => (
  <div className="bg-card rounded-lg p-6 border border-border">
    <div className="flex items-start">
      <div className="bg-primary/10 p-3 rounded-full mr-4">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-muted-foreground">{content}</p>
        {action && (
          <a
            href={action.href}
            className="text-primary text-sm hover:underline mt-1 inline-block"
          >
            {action.label}
          </a>
        )}
      </div>
    </div>
  </div>
)

// Reusable SocialLink component
const SocialLink = ({ href, icon: Icon }: { href: string, icon: LucideIcon }) => (
  <a
    href={href}
    className="bg-muted hover:bg-muted/80 p-3 rounded-full transition-colors"
  >
    <Icon className="h-5 w-5" />
  </a>
)

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  function onSubmit(data: FormValues) {
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log(data)
      setIsSubmitting(false)
      form.reset()
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      })
    }, 1500)
  }

  return (
    <>
      <Navbar />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">Contact</Badge>
              <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
                Get In Touch
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Have a project in mind or want to discuss a potential collaboration? 
                I'm always open to new opportunities and challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-1 space-y-8"
              >
                <ContactInfo
                  icon={Mail}
                  title="Email"
                  content="abdelbassetkhettabi@gmail.com"
                  action={{ href: "mailto:abdelbassetkhettabi@gmail.com", label: "Send an email" }}
                />
                <ContactInfo
                  icon={Phone}
                  title="Phone"
                  content="+213698586910"
                  action={{ href: "tel:+213698586910", label: "Call me" }}
                />
                <ContactInfo
                  icon={MapPin}
                  title="Location"
                  content="Guelma, Algeria"
                />
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h3 className="font-medium mb-4">Connect</h3>
                  <div className="flex space-x-4">
                    <SocialLink href="https://github.com/AbdElbassetKh" icon={Github} />
                    <SocialLink href="https://www.linkedin.com/in/abdelbassetkhettabi/" icon={Linkedin} />
                    <SocialLink href="https://x.com/AbdElbassetKh01" icon={Twitter} />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:col-span-2"
              >
                <div className="bg-card rounded-lg p-8 border border-border">
                  <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input placeholder="Your email address" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                              <Input placeholder="What is this regarding?" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell me about your project..."
                                className="min-h-[150px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>Sending...</>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}