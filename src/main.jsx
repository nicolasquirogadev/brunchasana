import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './mediaqueries.css'
import TalleresSlider from './TalleresSlider'
import Accordion from './Accordion'
import ContactForm from './ContactForm'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <section className="home" id='home'>
        <div className="logo-container">
          <img src="brunchasana/src/assets\Logotipo 500x500 px.png" alt="logo de brunchasana" />
        </div>
        <nav>
          <ul>
            <li className="nav-item"><a href="#equipo" className="nav-link">equipo</a></li>
            <li className="nav-item"><a href="#talleres" className="nav-link">talleres</a></li>
            <li className="nav-item"><a href="#contactanos" className="nav-link">contactanos</a></li>
          </ul>
        </nav>
    </section>

    <section id='equipo'>
      <h1 className="section-title">equipo</h1>
      <div className="equi-box">
        <div className="equi-container"><p className="equi-text">BRUNCHASANA nace como una forma de acercarse de manera lúdica y recreativa al mundo holístico, a la filosofía del yoga donde encontrar el camino que mejor te resuene a través de lo creativo , de los hábitos saludables, del arte terapéutico y también del encuentro con quienes vibren en tú misma frecuencia. </p></div>
        <div className="equi-container">
          <div className="eq-img-container one"><img src="brunchasana/src/assets/yoga4.jpeg" alt="" /></div>
          <div className="eq-img-container two"><img src="brunchasana/src/assets/brunchage.jpeg" alt="" /></div>
          <div className="eq-img-container thr"><img src="brunchasana/src/assets/yoga3.jpeg" alt="" /></div>
        </div>
        <div className="equi-container"><p className="equi-text">Soltando cargas emocionales a través del movimiento corporal, fluyendo con pinceladas de acuarelas las emociones enquistadas en tu estructura mental, que provocan estados de ansiedad y agobio. Te esperamos para profundizar en el redescubrir de tu mundo interior y con una mirada amorosa y compasiva hacer los cambios que mejor se adapten a tu crecimiento  personal.</p></div>
      </div>
    </section>


    <section id="talleres">
    <h1 className="section-title">talleres</h1>

    < TalleresSlider />

    </section>

    <section id="faq">
    <h1 className="section-title">preguntas frecuentes</h1>
    
    <Accordion />

    </section>

    <section id="politica-de-cancelacion">
    <h1 className="section-title">politica de cancelación</h1>
      <div className="card">
        <p>Las cancelaciones recibidas con menos de 7 días previo al evento <br></br> <strong>no serán reembolsadas.</strong> Podrá transferir la plaza a otra persona enviando previamente el formulario de reserva completo por quien acceda a la plaza cedida.</p>
        <p>
        En el caso que quieras acudir en <strong>otra fecha</strong>, se podrá modificar la reserva hasta 7  días previo a la fecha del evento. <br></br>
         <strong>Si el participante no acude al evento, se perderá el derecho a cualquier reembolso.</strong></p>
      </div>
    </section>

    <section id="contactanos">
    <h1 className="section-title">contactanos</h1>

      < ContactForm />

    </section>

    <footer>
      <a className="footer-item" href="https://www.instagram.com/brunchasana/" target="_blank">
      <i className="fa-brands fa-instagram"></i>
      @brunchasana
      </a>
      <a className="footer-item" href="https://www.tiktok.com/@brunchasana" target="_blank">
      <i className="fa-brands fa-tiktok"></i>
      @brunchasana
      </a>
      <a className="footer-item" href="mailto:brunchasana@gmail.com" target="_blank">
      <i className="fa-regular fa-envelope"> </i>
      brunchasana@gmail.com
      </a>
      <a className="footer-item" href="tel:+34-607-668-341" alt="Call +34-607-668-341">
      <i className="fa-solid fa-phone"></i>
      +34-607-668-341
      </a>
    </footer>

  </StrictMode>,
)
