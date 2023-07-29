

import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10 w-full">
      <div className="container mx-auto px-4 py-2 md:py-4 flex items-center justify-between">
        <a className="text-white text-xl font-medium" href="#about">
          Fredy Ramirez
        </a>
        <nav className="hidden md:flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Proyectos
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Habilidades
          </a>
          <a href="#testimonials" className="mr-5 hover:text-white">
            Testimonios
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          Contáctame
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}


