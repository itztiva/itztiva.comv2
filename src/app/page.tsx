"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Github, Twitter, Mail } from "lucide-react"
import Link from "next/link"
import { TypeAnimation } from "react-type-animation"
import { BsDiscord } from "react-icons/bs"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import Particless from "./particles";

const sections = ["home", "tech", "projects"]

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const sectionRefs = useRef(sections.map(() => React.createRef<HTMLElement>()))
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      opacity: [0, 1],
      y: [20, 0],
      transition: { duration: 0.8, ease: 'easeOut' },
    })
  }, [controls])

  const particlesInit = async (main: any) => {
    await loadFull(main)
  }

  useEffect(() => {
    const handleScroll = () => {
      const pageYOffset = window.pageYOffset
      let newActiveSection = sections[0]

      sectionRefs.current.forEach((ref, index) => {
        const element = ref.current
        if (element) {
          const offsetTop = element.offsetTop - 100
          if (pageYOffset >= offsetTop) {
            newActiveSection = sections[index]
          }
        }
      })

      setActiveSection(newActiveSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen to-black text-gray-300 font-sans relative">
      <Particless className="absolute inset-0" quantity={600} />
      <nav className="fixed top-0 left-0 h-screen w-16 flex flex-col items-center justify-center border border-white/5 space-y-8 z-50">
        {sections.map((section, index) => (
          <motion.div
            key={section}
            className={`w-4 h-4 rounded-full ${activeSection === section ? "bg-blue-600" : "bg-[#2a2a2a]"
              } transition-colors duration-300 cursor-pointer`}
            animate={{
              scale: activeSection === section ? 1.2 : 1,
              boxShadow: activeSection === section ? "0 0 15px rgba(59, 130, 246, 0.5)" : "none",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={() => {
              const element = sectionRefs.current[index].current
              element?.scrollIntoView({ behavior: "smooth" })
            }}
          />
        ))}
      </nav>

      <main className="ml-16 p-8">
        <div className="absolute inset-0 z-0">
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
              fullScreen: { enable: false },
              background: {
                color: {
                  value: "transparent",
                },
              },
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#ffffff",
                },
                links: {
                  color: "#ffffff",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 1,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 1, max: 5 },
                },
              },
              detectRetina: true,
            }}
          />
        </div>
        <Section id="home" ref={sectionRefs.current[0]}>
          <AnimatedContent>
            <motion.h1
              className="text-8xl font-bold mb-4 text-blue-500"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <TypeAnimation sequence={["Itztiva", 1000]} wrapper="span" speed={50} repeat={0} />
            </motion.h1>
            <motion.p
              className="text-2xl text-gray-400 mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <TypeAnimation
                sequence={["14-year-old programmer from the United States.", 1000]}
                wrapper="span"
                speed={50}
                repeat={0}
              />
            </motion.p>
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <SocialLink href="https://github.com/itztiva" icon={<Github />} />
              <SocialLink href="https://x.com/Itztivaa" icon={<Twitter />} />
              <SocialLink
                href="https://discord.com/users/942494965219610717"
                icon={<BsDiscord className="w-6 h-6" />}
              />
              <SocialLink href="mailto:tiva@itztiva.com" icon={<Mail />} />
            </motion.div>
          </AnimatedContent>
        </Section>

        <Section id="tech" ref={sectionRefs.current[1]}>
          <AnimatedContent>
            <h2 className="text-4xl font-bold mb-8 text-blue-500">My Expertise</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <TechItem name="TypeScript" color="bg-blue-800" />
              <TechItem name="Elixir" color="bg-purple-800" />
              <TechItem name="C#" color="bg-green-800" />
              <TechItem name="Python" color="bg-yellow-800" />
            </div>
          </AnimatedContent>
        </Section>

        <Section id="projects" ref={sectionRefs.current[2]}>
          <AnimatedContent>
            <h2 className="text-4xl font-bold mb-8 text-blue-500">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="Astral"
                description="An open source Fortnite Backend!"
                link="https://github.com/itztiva/Astral"
              />
              <ProjectCard
                title="Tivan Studios"
                description="A Game Studio I'm working on!"
                link="https://github.com/Tivan-Studios/"
              />
              <ProjectCard title="Solaris" description="OG Fortnite Project" link="https://discord.gg/solarisfn" />
            </div>
          </AnimatedContent>
        </Section>
      </main>
    </div>
  )
}

const Section = React.forwardRef<HTMLElement, React.HTMLProps<HTMLElement>>((props, ref) => (
  <section ref={ref} className="min-h-screen flex flex-col justify-center relative z-10" {...props} />
))
Section.displayName = "Section"

function AnimatedContent({ children }: { children: React.ReactNode }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
      }}
    >
      {children}
    </motion.div>
  )
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-500 transition-colors"
      >
        {icon}
      </Link>
    </motion.div>
  )
}

function TechItem({ name, color }: { name: string; color: string }) {
  return (
    <motion.div
      className={`p-4 rounded-lg ${color} text-gray-200 font-semibold text-center relative overflow-hidden`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0 bg-white opacity-0"
        whileHover={{ opacity: 0.1, scale: 1.5 }}
        transition={{ duration: 0.3 }}
      />
      {name}
    </motion.div>
  )
}

function ProjectCard({ title, description, link }: { title: string; description: string; link: string }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 rounded-lg bg-[#1a1a1a] hover:bg-[#2a2a2a] transition-colors relative overflow-hidden group"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
      <h3 className="text-xl font-semibold mb-2 text-blue-400 relative z-10">{title}</h3>
      <p className="text-gray-400 mb-4 relative z-10">{description}</p>
      <span className="text-blue-500 font-medium relative z-10 group-hover:underline">View Project →</span>
    </motion.a>
  )
}
