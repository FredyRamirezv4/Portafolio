import React from "react";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.027752422584!2d-74.11034392408139!3d4.5890424426134935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99273fc8e57d%3A0x5fcb09571d43578c!2sCl.%2020%20Sur%20%2325-48%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1690586130038!5m2!1ses!2sco"
          />

          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                DIRECCIÓN
              </h2>
              <p className="mt-1">
                Cll 20 sur 25 48 <br />
                Restrepo, Bogotá 111511
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                CORREO ELECTRÓNICO
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                jframirezrz@email.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                NÚMERO DE TELÉFONO
              </h2>
              <p className="leading-relaxed">3001924242</p>
            </div>
          </div>
        </div>
        <form
          name="contact" // Nombre del formulario para Netlify
          method="POST" // Método del formulario
          data-netlify="true" // Habilitar el manejo del formulario por Netlify
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            ¡Contáctame!
          </h2>
          <p className="leading-relaxed mb-5">
            Los correos serán contestados en el horario de 8:00 am a 5:00 pm de
            lunes a viernes, para su mayor comodidad
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name" // Asignar el atributo "name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email" // Asignar el atributo "name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message" // Asignar el atributo "name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          {/* Agregar el campo oculto para el atributo "form-name" que debe coincidir con el nombre del formulario */}
          <input type="hidden" name="form-name" value="contact" />

          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}








// import React from "react";

// export default function Contact() {
//   const [name, setName] = React.useState("");
//   const [email, setEmail] = React.useState("");
//   const [message, setMessage] = React.useState("");

//   function encode(data) {
//     return Object.keys(data)
//       .map(
//         (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
//       )
//       .join("&");
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     fetch("/", {
//       method: "POST",
//       headers: { "Content-Type": "application/x-www-form-urlencoded" },
//       body: encode({ "form-name": "contact", name, email, message }),
//     })
//       .then(() => alert("Message sent!"))
//       .catch((error) => alert(error));
//   }

//   return (
//     <section id="contact" className="relative">
//       <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
//         <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative" >
        
//         <iframe
            
//             width="100%"
//             height="100%"
//             title="map"
//             className="absolute inset-0"
//             frameBorder={0}
//             marginHeight={0}
//             marginWidth={0}
//             style={{ filter: "opacity(0.7)" }}
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.027752422584!2d-74.11034392408139!3d4.5890424426134935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99273fc8e57d%3A0x5fcb09571d43578c!2sCl.%2020%20Sur%20%2325-48%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1690586130038!5m2!1ses!2sco"
//         />
          
        

//           <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
//             <div className="lg:w-1/2 px-6">
//               <h2 className="title-font font-semibold text-white tracking-widest text-xs" >
//                 DIRECCIÓN
//               </h2>
//               <p className="mt-1">
//                 Cll 20 sur 25 48 <br />
//                 Restrepo, Bogotá 111511
//               </p>
//             </div>
//             <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
//               <h2 className="title-font font-semibold text-white tracking-widest text-xs">
//                 CORREO ELECTRÓNICO
//               </h2>
//               <a className="text-indigo-400 leading-relaxed">
//                 jframirezrz@email.com
//               </a>
//               <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
//                 NÚMERO DE TELÉFONO
//               </h2>
//               <p className="leading-relaxed">3001924242</p>
//             </div>
//           </div>
//         </div>
//         <form
//           netlify="true"
//           onSubmit={handleSubmit}
//           className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
//           >
//           <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
//             ¡Contáctame!
//           </h2>
//           <p className="leading-relaxed mb-5">
//           Los correos serán contestados en el horario de 8:00am a 5:00pm de lunes a viernes, para su mayor comodidad 
//           </p>
//           <div className="relative mb-4">
//             <label htmlFor="name" className="leading-7 text-sm text-gray-400">
//               Nombre
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//           <div className="relative mb-4">
//             <label htmlFor="email" className="leading-7 text-sm text-gray-400">
//               Correo electrónico
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="relative mb-4">
//             <label
//               htmlFor="message"
//               className="leading-7 text-sm text-gray-400"
//               >
//               Mensaje
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
//               onChange={(e) => setMessage(e.target.value)}
//             />
//           </div>
//           <button
//             type="submit"
//             className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
//             >
//             Enviar
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }