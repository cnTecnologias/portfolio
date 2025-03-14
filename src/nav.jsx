import './index.css' 
export function Nav() {
  return (
    <nav className="p-4 h-full w-full rounded-b-lg">
      <div className="container md:mx-auto flex items-center">
        <div className="flex items-center w-full md:justify-end justify-self-start">
          <img alt="Logo" className="logoNav md:h-10 w-auto md:mr-4 rounded-2xl h-8" />
          <ul className="flex text-white w-full justify-center items-center md:gap-20 gap-2.5">
            <li>
              <a href="#presentacion" className="font-serif font-bold md:text-2xl text-sm hover:text-gray-300">
                Presentación
              </a>
            </li>
            <li>
              <a href="#proyectos" className="font-serif font-bold md:text-2xl text-sm hover:text-gray-300">
                Proyectos
              </a>
            </li>
            <li>
              <a href="#contacto" className="font-serif font-bold md:text-2xl text-sm hover:text-gray-300">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}