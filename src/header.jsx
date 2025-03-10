import React, { useState, useEffect } from 'react';

export default function Header(){
  const quotes = [
    'La tecnología es un sirviente útil pero un amo peligroso. - Christian Lous Lange',
    'Cualquier tecnología suficientemente avanzada es indistinguible de la magia. - Arthur C. Clarke',
    'La tecnología no es nada. Lo importante es que tengas fe en la gente. - Steve Jobs',
    // Agrega más frases aquí
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000); // Cambia la frase cada 5 segundos

    return () => clearInterval(intervalId); // Limpia el intervalo al desmontar el componente
  }, [quotes]);

  return (
    <header className="portadaCN text-white flex md:justify-between md:items-center w-full h-screen flex-wrap items-center">
      <div className="font-bold md:text-7xl font-serif p-5 text-4xl md:h-1/2">CN <br />Tecnologias</div>
      <div className="md:text-2xl text-sm italic p-5 h-1/4 md:w-1/2">{quotes[currentQuoteIndex]}</div>
    </header>
  );
}
