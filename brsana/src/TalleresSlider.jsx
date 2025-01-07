import TallerCard from './TallerCard'
import './Talleres.css'

function TalleresSlider() {

    new Swiper('.card-wrapper', {
  
        loop: true,

        pagination: {
            el: '.swiper-pagination',
          },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    
        breakpoints: {
            768: {
              slidesPerView: 2
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10
            },
            
          }
      
      });

    return (
    
    <>
    <div className="container swiper">
      <div className="card-wrapper"> 
        <ul className="card-list swiper-wrapper">
          
          <li className="ta-card swiper-slide">
            <TallerCard 
            title="Yoga y Arte" 
            imgsrc={"./src/assets/yoga-arte.jpeg"}
            ptext="Te invitamos a pasar una tarde  (blablablablablabla) a pintar a hacer yoga aca falta mas texto pero se explica un poco de que trata el taller." 
            schedule="Día 05/12/2024 de 16:00 hasta 20:00" /></li>

          <li className="ta-card swiper-slide">
            <TallerCard
            title="Yoga y Crochet" 
            imgsrc={"./src/assets/yoga-crochet.jpeg"}
            ptext="Te invitamos a pasar una tarde  (blablablablablabla) a pintar a hacer yoga aca falta mas texto pero se explica un poco de que trata el taller." 
            schedule="Día 05/12/2024 de 16:00 hasta 20:00" /></li>
            
          <li className="ta-card swiper-slide">
            <TallerCard 
            title="Yoga y Literatura" 
            imgsrc={"./src/assets/yoga-literatura.jpeg"}
            ptext="Te invitamos a pasar una tarde  (blablablablablabla) a pintar a hacer yoga aca falta mas texto pero se explica un poco de que trata el taller." 
            schedule="Día 05/12/2024 de 16:00 hasta 20:00" /></li>
            
          <li className="ta-card swiper-slide">
            <TallerCard 
            title="Yoga y Fotografía" 
            imgsrc={"./src/assets/yoga-y-foto.jpeg"}
            ptext="Te invitamos a pasar una tarde  (blablablablablabla) a pintar a hacer yoga aca falta mas texto pero se explica un poco de que trata el taller." 
            schedule="Día 05/12/2024 de 16:00 hasta 20:00" />
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
