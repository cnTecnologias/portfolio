import React from 'react';
import { useForm } from 'react-hook-form';

const Contacto = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:5000/enviar-correo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Correo enviado correctamente');
        reset(); //reinicia el formulario
      } else {
        alert('Error al enviar el correo');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al enviar el correo');
    }
  };

  return (
    <div id="contacto" className="max-w-xl mx-auto mt-2 mb-3.5 p-10 border rounded-md min-h-[500px]">
      <h2 className="text-2xl font-semibold font-sans mb-4">Contáctanos</h2>
      <div className="mb-4">
        <p>
          <strong className="font-sans">Teléfono:</strong> +54 9 3515447794
        </p>
        <p>
          <strong className="font-sans">Dirección:</strong> Cordoba, Cordoba, Argentina
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium font-sans text-gray-700">Nombre:</label>
          <input
            {...register('nombre', { required: 'El nombre es requerido' })}
            type="text"
            id="nombre"
            className="font-mono mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.nombre && <p className="text-red-500 text-xs mt-1">{errors.nombre.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium font-sans text-gray-700">Email:</label>
          <input
            {...register('email', { required: 'El email es requerido' })}
            type="email"
            id="email"
            className="mt-1 block w-full font-mono border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="mensaje" className="block text-sm font-medium font-sans text-gray-700">Mensaje:</label>
          <textarea
            {...register('mensaje', { required: 'El mensaje es requerido' })}
            id="mensaje"
            className="font-mono mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 resize-none"
          ></textarea>
          {errors.mensaje && <p className="text-red-500 text-xs mt-1">{errors.mensaje.message}</p>}
        </div>
        <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold font-sans py-3 mt-2.5 px-4 rounded cursor-pointer">Enviar Consulta</button>
      </form>
    </div>
  );
};

export default Contacto;