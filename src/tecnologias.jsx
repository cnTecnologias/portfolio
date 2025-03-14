import './index.css';
const TecnologiasDiapositiva = () => {
    const tecnologias = [
      { nombre: 'React', icono: '/portfolio/src/assets/react_logo.svg' },
      { nombre: 'Python', icono: '/portfolio/src/assets/python_logo.svg' },
      { nombre: 'Kotlin', icono: '/portfolio/src/assets/kotlin_logo.svg' },
      { nombre: 'Swift', icono: '/portfolio/src/assets/swift_logo.svg' },
    ];
  
    return (
      <div className="flex-col justify-items-center text-center h-full w-full">
        <h2 className="md:text-3xl font-bold mb-4 p-10 underline decoration-sky-700 md:h-11 h-64">QUE HACEMOS</h2>
        <div className='flex-col md:justify-center md:gap-4 md:p-20 p-5 h-full'>
            <p className="mb-6 md:text-2xl text-base md:h-1/4 h-1/3 font-sans">
            Desarrollamos soluciones de software innovadoras utilizando las últimas tecnologías.
            </p>
            <div className="flex justify-center flex-wrap md:h-1/2 h-1/3">
                {tecnologias.map((tec, index) => (
                    <div key={index} className="flex flex-col items-center m-4">
                        <img src={tec.icono} alt={tec.nombre} className="md:w-12 md:h-12 mb-2 w-6 h-6" />
                        <span className='font-sans '>{tec.nombre}</span>
                    </div>
          ))}
        </div>
        </div>
      </div>
    );
  };
  
  export default TecnologiasDiapositiva;