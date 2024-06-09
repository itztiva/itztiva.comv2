import Link from "next/link";
import React from "react";
import Image from "next/image";
import Particles from "./components/particles";

const navigationLinks = [
  { name: "Github", href: "https://github.com/itztiva" },
  { name: "Tiktok", href: "https://www.tiktok.com/@itztiva" },
  { name: "Discord", href: "https://discord.com/users/942494965219610717" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden via-zinc-600/20 to-black">
      <nav className="fixed top-0 w-full py-4 animate-fade-in bg-black bg-opacity-50">
        <ul className="flex items-center justify-center gap-8">
          {navigationLinks.map(({ name, href }) => (
            <li key={href}>
              <Link href={href} legacyBehavior>
                <a className="text-lg duration-100 text-zinc-500 hover:text-zinc-300">
                  {name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
      <h1 className="z-10 mt-24 text-4xl text-transparent duration-500 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
        Tiva
      </h1>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-300">
          TS, ELIXIR, C#, PYTHON
        </h2>
        <div className="flex justify-center mt-4 gap-8">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" alt="TypeScript" width={50} height={50} />
        <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/elixir_lang_logo_icon_169207.png" alt="Elixir" width={50} height={50} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1820px-Logo_C_sharp.svg.png" alt="C#" width={50} height={50} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" alt="Python" width={50} height={50} />
        </div>
      </div>
    </div>
  );
}
