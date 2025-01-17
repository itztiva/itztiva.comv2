'use client'

import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Github, Globe, Twitter } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { LiaDiscord } from "react-icons/lia";
import Particles from "./particles";
import { IoMailOutline } from "react-icons/io5";

export default function Portfolio() {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      opacity: [0, 1],
      y: [20, 0],
      transition: { duration: 0.8, ease: 'easeOut' },
    })
  }, [controls])

  return (
    <div className="min-h-screen overflow-hidden relative">
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-[#0f284a] to-[#000011]" />
      <Particles className="absolute inset-0" quantity={600} />
      <div className="relative z-10 min-h-screen flex flex-col items-center">
        <nav className="mt-4 bg-black bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-md px-5 py-4 flex items-center justify-center space-x-6 shadow-lg">
          <SocialLink href="https://github.com/itztiva" icon={<Github className="w-5 h-5" />}>
            GitHub
          </SocialLink>
          <SocialLink href="https://x.com/Itztivaa" icon={<Twitter className="w-5 h-5" />}>
            Twitter
          </SocialLink>
          <SocialLink
            href="https://discord.com/users/942494965219610717"
            icon={<LiaDiscord className="w-5 h-5" />}>
            Discord
          </SocialLink>
          <SocialLink
            href="mailto:tiva@itztiva.com"
            icon={<IoMailOutline className="w-5 h-5" />}>
          Contact
        </SocialLink>
      </nav>

      <motion.main
        className="flex-grow flex flex-col items-center justify-center text-white px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
      >
        <h1 className="text-6xl font-bold mb-4 text-center">Itztiva</h1>
        <p className="text-xl mb-4 text-center bg-black bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-md px-5 py-4 flex items-center justify-center space-x-6 shadow-lg">Hi!, I'm a 14 year old programmer from the United States.</p>
        <div className="text-center mb-12">
          <div className="flex flex-wrap justify-center items-center gap-8 mt-4 bg-black bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-md px-4 py-4 flex items-center justify-center space-x-6 shadow-lg">
            <LanguageIcon src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" alt="TypeScript" />
            <LanguageIcon src="https://cdn.icon-icons.com/icons2/2699/PNG/512/elixir_lang_logo_icon_169207.png" alt="Elixir" />
            <LanguageIcon src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1820px-Logo_C_sharp.svg.png" alt="C#" />
            <LanguageIcon src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" alt="Python" />
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <ProjectCard
              title="Solaris"
              description="OG Fortnite Project"
              link="https://discord.gg/solarisfn"
            />
          </div>
        </div>
      </motion.main>
    </div>
    </div >
  )
}

function SocialLink({ href, icon, children }: { href: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-white hover:text-white/80 transition-colors"
    >
      {icon}
      <span className="hidden sm:inline">{children}</span>
    </Link>
  )
}

function LanguageIcon({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-16 h-16 relative">
      <Image src={src} alt={alt} width={64} height={64} className="object-contain" />
    </div>
  )
}

function ProjectCard({ title, description, link }: { title: string; description: string; link: string }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 rounded-lg bg-black bg-opacity-30 backdrop-filter backdrop-blur-lg hover:bg-opacity-50 transition-all"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-white/80 mb-4">{description}</p>
      <div className="flex items-center gap-2 text-sm text-white/60">
        <Globe className="w-4 h-4" />
        <span>View</span>
      </div>
    </motion.a>
  )
}
