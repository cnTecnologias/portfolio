import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Nav} from './nav.jsx'
import Header from './header.jsx'
import Carousel from './carousel.jsx'
import TecnologiasDiapositiva from './tecnologias.jsx'
import Proyectos from './proyectos.jsx'
import Contacto from './contacto.jsx'
import Footer from './footer.jsx'

const root=createRoot(document.getElementById('root'))
//diapositivas que va a usar el componente Carousel
const slides = [
  <div id='presentacion' className="flex-col h-full justify-items-center w-full">
  <h2 className='font-bold p-10 underline decoration-sky-700 md:text-3xl'>QUIENES SOMOS</h2>
  <div className='w-full h-full md:flex md:justify-between p-20'>
     <p className='font-sans md:w-1/2 w-full md:text-2xl text-base mb-6'>Somos una empresa dedicada a la creación de tecnología de punta. Diseñamos plataformas digitales innovadoras que facilitan el acceso a la educación y la información, con el objetivo de mejorar la calidad de vida de las personas, empoderándolas para alcanzar su máximo potencial.
     </p>
     <div className="tenor-gif-embed md:h-1/2 md:w-1/4 w-full p-10" data-postid="9466370892182877823" data-share-method="host" data-aspect-ratio="1">
       <a href="https://tenor.com/view/carregando-loading-gif-9466370892182877823">Carregando Loading GIF</a>
       from <a href="https://tenor.com/search/carregando-gifs">Carregando GIFs</a>
       </div> 
       <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
  </div>
 </div>,
   <TecnologiasDiapositiva/>,
   <div className="flex-col h-full justify-items-center w-full">
   <h2 className='font-bold p-10 underline decoration-sky-700 md:text-3xl text-center md:h-12 h-64'>POR QUE CONFIAR EN NOSOTROS</h2>
   <div className='w-full h-full flex-col justify-items-center items-center md:p-20 p-10'>
      <p className=' font-sans w-full md:text-2xl text-base md:mb-10 mb-20 text-center'>Ya que contamos con un equipo de profesionales altamente capacitados, con experiencia en el desarrollo de software y la implementación de tecnologías de vanguardia.
      </p>
      <figure className='inline-block text-center '>
      <img className=' object-cover md:h-1/2 h-1/4 md:w-50 w-1/2 m-auto rounded-full' src="/portfolio/public/trabajoEquipo.jpeg" alt="trabajo en equipo" />
      <figcaption className=' md:text-sm text-xs text-gray-500'>Nuestro equipo trabajando</figcaption>
      </figure>   
   </div>

  </div>,    
  ];
root.render(
<React.Fragment>
 <Nav/>
 <Header/>
<Carousel slides={slides}/>
<Proyectos/>
<Contacto/>
<Footer></Footer>
</React.Fragment>
)
