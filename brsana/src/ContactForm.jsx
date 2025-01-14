import './contact-form.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6upvgwg', 'template_tybxfoq', form.current, {
        publicKey: 'cka9lIc7vwoqa0n6i',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          Swal.fire({
            title: "Muy Bien!",
            text: "Tu mensaje se ha enviado con exito!",
            icon: "success"
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

    return (

        <form ref={form} onSubmit={sendEmail} className="contact-form">
      <input type="text" name="user_name" placeholder=" tu nombre"/>
      <input type="email" name="user_email"  placeholder=" tu email"/>
      <label>
        <span>taller:</span>
      <select name="user_taller">
        <option value="" className="op-ds">Selecciona un taller</option>
        <option value="Yoga y Acuarelas" className="op-s">Yoga y Acuarelas</option>
        <option value="Yoga y Sahumos" className="op-s">Yoga y Sahumos</option>
        <option value="Yoga y Ceramica" className="op-s">Yoga y Ceramica</option>
     </select>
      </label>
      <textarea name="message" placeholder=" tu mensaje"/>
      <input className="form-btn" type="submit" value="Enviar" />
    </form>


    )
}

export default ContactForm;