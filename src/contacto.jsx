import React, { useState } from 'react';

const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', { nombre, email, mensaje });
    setNombre('');
    setEmail('');
    setMensaje('');
  };

  return (
    <div id='contacto' className="max-w-xl mx-auto mb-3.5 p-10 border rounded-md">
      <h2 className="text-2xl font-semibold font-sans mb-4">Contáctanos</h2>
      <div className="mb-4">
        <p>
          <strong className='font-sans'>Teléfono:</strong> +54 9 3515447794
        </p>
        <p>
          <strong className='font-sans'>Dirección:</strong> Cordoba,Cordoba,Argentina
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium font-sans text-gray-700">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium font-sans text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="mensaje" className="block text-sm font-medium font-sans text-gray-700">Mensaje:</label>
          <textarea
            id="mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          ></textarea>
        </div>
        <button type="submit" className="bg-indigo-600 hover:bg-indigo-700  text-white font-bold font-sans py-2 px-4 rounded">Enviar Consulta</button>
      </form>
    </div>
  );
};

export default Contacto;