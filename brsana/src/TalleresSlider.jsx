import TallerCard from './TallerCard'
import './Talleres.css'

function TalleresSlider() {

    new Swiper('.card-wrapper', {
  
        loop: true,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
      
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        
      });

    return (
    
    <>
    <div className="container swiper">
      <div className="card-wrapper"> 
        <ul className="card-list swiper-wrapper">
          
          <li className="swiper-slide">
            <TallerCard 
            title="YOGA Y ACUARELA" 
            img1src={"./src/assets/yoga.jpeg"}
            img2src={"./src/assets/yoga-arte.jpeg"}
            img3src={"./src/assets/brunch.jpeg"}
            ptext="Iniciaremos con una clase de yoga con una secuencia de asanas respetando las necesidades y limitaciones de cada cuerpo, abriéndonos así a la escucha interior para luego saborear un exquisito y saludable  brunch  de manera consciente y  despertar la mente a lo sutil y profundo, activando así la energía de nuestros chakras, y dejando la mente liberada a la expresión para abordar un divertido acercamiento a las acuarelas  en la segunda parte del taller donde te llevaras de recuerdo tu obra!" 
            schedule="Día 15/02/2025 de 11:30 hasta 14:00. Frente al Museo Reina Sofia" /></li>

          <li className="swiper-slide">
            <TallerCard
            title="YOGA Y CERAMICA" 
            img1src={"./src/assets/yoga2.jpeg"}
            img2src={"./src/assets/ceramica.jpeg"}
            img3src={"./src/assets/brunch.jpeg"}
            ptext="En este taller disfrutaremos de una clase de Yin yoga muy restaurativa para devolverle al cuerpo la flexibilidad perdida con el estrés laboral luego disfrutaremos un brunch delicioso y saludable para prepararnos los sentidos y expresarnos en la arcilla, llevandonos la pieza que realicemos!" 
            schedule="Día y horario a definir" /></li>

          <li className="swiper-slide">
            <TallerCard
            title="YOGA Y FOTOGRAFIA" 
            img1src={"./src/assets/yoga2.jpeg"}
            img2src={"./src/assets/yoga-y-foto.jpeg"}
            img3src={"./src/assets/brunch.jpeg"}
            ptext="En este taller unimos nuestras pasiones! el yoga y la fotografía haremos un clase de yoga con plena atención en la alineación de cada asana y en sus beneficios físicos y mentales, pasaremos al  brunch apetitoso y con degustación de vino para así tomar nuestras cámaras y  captar la paz encontrada en nuestra asana preferida. Un plan ideal para realizar bien acompañado." 
            schedule="Día y horario a definir" /></li>
            
          <li className="swiper-slide">
            <TallerCard 
            title="YOGA Y AROMATERAPIA" 
            img1src={"./src/assets/yoga2.jpeg"}
            img2src={"./src/assets/aromaterapia.jpeg"}
            img3src={"./src/assets/brunch.jpeg"}
            ptext="Es un doble taller pensado para el relax y un despertar a la armonía interior,  explorando cómo los aromas, las texturas, los colores, modifican nuestro estado de ánimo y nuestras  emociones, un detox mental al estrés y a los agresivos agentes exógenos que nos alejan de nuestro natural equilibrio interior. Finalmente disfrutaremos un saludable brunch con nuestros chakras ya armonizados." 
            schedule="Día y horario a definir" /></li>
            
          <li className="swiper-slide">
            <TallerCard 
            title="YOGA Y ZENTANGLE" 
            img1src={"./src/assets/yoga2.jpeg"}
            img2src={"./src/assets/zentangle.jpeg"}
            img3src={"./src/assets/brunch.jpeg"}
            ptext="Taller  diseñado especialmente para  mejorar un estado de ansiedad y estrés, iniciamos con  una clase de Yin Yoga donde las posturas/asanas nos brindaran una relajación física y mental, abriéndonos a un estado de calma para continuar con un brunch saludable así nutrirnos de modo consciente y prepararnos para una meditación artística donde liberar la mente con trazos sobre papel formando patrones aleatorios enfocandonos en una concentración plena" 
            schedule="Día y horario a definir" />
            </li>

            <li className="swiper-slide">
            <TallerCard 
            title="YOGA Y SAHUMOS" 
            img1src={"./src/assets/yoga2.jpeg"}
            img2src={"./src/assets/sahumos.jpeg"}
            img3src={"./src/assets/brunch.jpeg"}
            ptext="Este taller nos brinda la posibilidad de armonizar nuestro interior  a través de una clase de yoga que finaliza con una relajación guiada y  así pasar al apetitoso brunch saludable que nos da las energías necesarias para aprender a realizar nuestro sahumo casero y personalizado de acuerdo a nuestra necesidad emocional abordaremos los efectos de las distintas hierbas y sus beneficios. y nos lo llevamos a casa!!" 
            schedule="Día y horario a definir" />
            </li>
            </ul>

            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </div>
      </div>
    </>
    )
}

export default TalleresSlider
