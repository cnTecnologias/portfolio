import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {year} CN Tecnologias. Todos los derechos reservados.
        </p>
        <nav className="mt-2">
          <a href="/politica-privacidad" className="text-gray-300 hover:text-white mx-2">
            Política de Privacidad
          </a>
          <a href="/terminos-condiciones" className="text-gray-300 hover:text-white mx-2">
            Términos y Condiciones
          </a>
          <a href="#contacto" className="text-gray-300 hover:text-white mx-2">
            Contacto
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;