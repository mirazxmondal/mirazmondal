"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, Moon, Sun, User } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function Portfolio() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-background font-sans">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link className="flex items-center space-x-2" href="/">
              <User className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">Jane Doe</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link href="#about">About</Link>
              <Link href="#projects">Projects</Link>
              <Link href="#skills">Skills</Link>
              <Link href="#contact">Contact</Link>
            </nav>
          </div>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            className="mr-6"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section id="about" className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold">Jane Doe</h1>
          <p className="mb-6 text-xl text-muted-foreground">Full Stack Developer</p>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            I'm a passionate developer with experience in building web applications using modern technologies. I love
            creating elegant solutions to complex problems.
          </p>
        </section>

        <section id="projects" className="mb-16">
          <h2 className="mb-6 text-2xl font-bold">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Project 1</CardTitle>
                <CardDescription>A brief description of Project 1</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-2 text-muted-foreground">Technologies used: React, Node.js, MongoDB</p>
                <Button asChild>
                  <Link href="#">View Project</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Project 2</CardTitle>
                <CardDescription>A brief description of Project 2</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-2 text-muted-foreground">Technologies used: Vue.js, Express, PostgreSQL</p>
                <Button asChild>
                  <Link href="#">View Project</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Project 3</CardTitle>
                <CardDescription>A brief description of Project 3</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-2 text-muted-foreground">Technologies used: Next.js, GraphQL, AWS</p>
                <Button asChild>
                  <Link href="#">View Project</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="skills" className="mb-16">
          <h2 className="mb-6 text-2xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {["JavaScript", "TypeScript", "React", "Node.js", "Python", "SQL", "Git", "AWS"].map((skill) => (
              <span key={skill} className="rounded-full bg-primary px-3 py-1 text-sm text-primary-foreground">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="contact" className="mb-16">
          <h2 className="mb-6 text-2xl font-bold">Contact</h2>
          <div className="flex justify-center space-x-4">
            <Button asChild variant="outline">
              <Link href="mailto:jane@example.com">
                <Mail className="mr-2 h-4 w-4" />
                Email
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="https://github.com/janedoe">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="https://linkedin.com/in/janedoe">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose md:text-left">
              Built with Next.js and Tailwind CSS. Deployed on Vercel.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}