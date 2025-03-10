import React from 'react'

import { createRoot } from 'react-dom/client'
import './index.css'
import {Nav} from './nav.jsx'
import Header from './header.jsx'
import Carousel from './carousel.jsx'

const root=createRoot(document.getElementById('root'))
//diapositivas que va a usar el componente Carousel
const slides = [
  <div id='presentacion' className="flex-col h-full justify-items-center w-full">
  <h2 className='font-bold p-10 underline decoration-sky-700 md:text-3xl'>QUIENES SOMOS</h2>
  <div className='w-full h-full md:flex md:justify-between p-20'>
     <p className='font-serif md:w-1/2 w-full md:text-2xl text-sm mb-3'>Somos una empresa dedicada a la creación de tecnología de punta, con el objetivo de mejorar la calidad de vida de las personas.
     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, debitis numquam blanditiis quisquam quaerat voluptate et voluptas eveniet molestias fuga eius! Reiciendis fugit, laudantium ipsa fugiat repudiandae quaerat quod dolor!
     </p>
     <div className="tenor-gif-embed md:h-1/2 md:w-1/4 w-full p-10" data-postid="9466370892182877823" data-share-method="host" data-aspect-ratio="1">
       <a href="https://tenor.com/view/carregando-loading-gif-9466370892182877823">Carregando Loading GIF</a>
       from <a href="https://tenor.com/search/carregando-gifs">Carregando GIFs</a>
       </div> 
       <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
  </div>
 </div>,
    <div className="flex-col h-full justify-items-center w-full">
    <h2 className='font-bold p-10 underline decoration-sky-700 md:text-3xl'>QUE HACEMOS</h2>
    <div className='w-full h-full md:flex md:justify-between p-20'>
       <p className='font-serif md:w-1/2 w-full md:text-2xl text-sm mb-3'>Somos una empresa dedicada a la creación de tecnología de punta, con el objetivo de mejorar la calidad de vida de las personas.
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, debitis numquam blanditiis quisquam quaerat voluptate et voluptas eveniet molestias fuga eius! Reiciendis fugit, laudantium ipsa fugiat repudiandae quaerat quod dolor!
       </p>
       <div className="tenor-gif-embed md:h-1/2 md:w-1/4 w-full p-10" data-postid="9466370892182877823" data-share-method="host" data-aspect-ratio="1">
         <a href="https://tenor.com/view/carregando-loading-gif-9466370892182877823">Carregando Loading GIF</a>
         from <a href="https://tenor.com/search/carregando-gifs">Carregando GIFs</a>
         </div> 
         <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
    </div>
   </div>,
   <div className="flex-col h-full justify-items-center w-full">
   <h2 className='font-bold p-10 underline decoration-sky-700 md:text-3xl'>POR QUE CONFIAR EN NOSOTROS</h2>
   <div className='w-full h-full md:flex md:justify-between p-20'>
      <p className='font-serif md:w-1/2 w-full md:text-2xl text-sm mb-3'>Somos una empresa dedicada a la creación de tecnología de punta, con el objetivo de mejorar la calidad de vida de las personas.
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, debitis numquam blanditiis quisquam quaerat voluptate et voluptas eveniet molestias fuga eius! Reiciendis fugit, laudantium ipsa fugiat repudiandae quaerat quod dolor!
      </p>
      <div className="tenor-gif-embed md:h-1/2 md:w-1/4 w-full p-10" data-postid="9466370892182877823" data-share-method="host" data-aspect-ratio="1">
        <a href="https://tenor.com/view/carregando-loading-gif-9466370892182877823">Carregando Loading GIF</a>
        from <a href="https://tenor.com/search/carregando-gifs">Carregando GIFs</a>
        </div> 
        <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
   </div>
  </div>,    
  ];
root.render(
<React.Fragment>
 <Nav/>
 <Header/>
<Carousel slides={slides}/>
</React.Fragment>
)
