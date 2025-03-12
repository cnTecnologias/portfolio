import express, { json } from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import { config } from 'dotenv';

config();

const app = express();
app.use(cors());
app.use(json());

app.post('/enviar-correo', (req, res) => {
  const { nombre, email, mensaje } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'nestcyber1@gmail.com',
      pass: 'blrk qkqv zyeu kevp',
    },
  });

  const mailOptions = {
    from: 'nestcyber1@gmail.com', // O tu correo de origen
    to: 'nestcyber1@gmail.com', // O tu correo de destino
    subject: 'Nuevo mensaje de contacto',
    text: `Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error al enviar el correo');
    } else {
      console.log('Correo enviado: ' + info.response);
      res.send('Correo enviado correctamente');
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});