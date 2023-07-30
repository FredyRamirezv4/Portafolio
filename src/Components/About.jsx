import React from "react";


export default function About() {
    return (
      <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center" >
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hola,
              <br className="hidden lg:inline-block" />Soy bibliotecario y programo en la web  
            </h1>
            <p className="mb-8 leading-relaxed">
            tengo experiencia en el manejo de revistas científicas, incluyendo los estándares y procesos de indexación de artículos científicos (OJS). Mi trayectoria incluye la búsqueda, selección y organización de artículos científicos relevantes para apoyar investigaciones y toma de decisiones en entornos académicos y profesionales. También, en el campo de la programación, cuento con habilidades en PHP, HTML, JavaScript, CSS y Bases de Datos.
            
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
                >
                Trabaja conmigo
              </a>
              <a
                href="#projects"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
                >
                Mira mis trabajos anteriores
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center "
              alt="Perfil"
              src="images/PerfilCV.svg"
            />
          </div>
        </div>
      </section>
    );
  }