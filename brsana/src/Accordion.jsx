import './accordion.css'

import { useState } from 'react';

function Accordion() {

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {

       if (selected == i) {
        return (
            setSelected(null)
        )
       }

       setSelected(i)
    }

    return (
        <div className="wrapper">
            <div className="accordion">
                {data.map((item, i) => (
                    <div className="item">
                        <div className="question" onClick={() => toggle(i)}>
                            <h2 className='title'>{item.question}</h2>
                            <span>
                                {selected === i ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>}
                            </span>
                        </div>
                        <div className={selected === i ? 'content show' : 'content'}>
                            {selected == 1 ? <a className='faq-link' href='#politica-de-cancelacion'>Ver politica de cancelación.</a> : item.answer}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
} 

const data = [
    {
        question: '¿Qué debo llevar al evento?',
        answer:
        'Tienes que venir con ropa comoda para la actividad fisica y, cuando hacemos alguna actividad que incluye pintura, que no te importe ensuciarte.'
    },
    {
        question: '¿Qué pasa si no puedo ir?',
        answer:
        'Ver politica de cancelación.'
    },
    {
        question: '¿Puedo llevar mi esterilla?',
        answer:
        'En nuestro taller disponemos de esterilla, ladrillos, cinturones y mantas de yoga para realizar la clase, pero en caso de que quieras traer la tuya no hay problema! Solo te pedimos que nos avises en funcion de la preparacion de la sala de yoga para la actividad.'
    },
    {
        question: '¿Cuando y donde son los eventos?',
        answer:
        'Brunchasana esta pensado para llevar el yoga y su filosofia de bienestar y crecimiento personal a todas partes. Puedes encontrar la informacion en nuestras redes sociales y ademas si te apetece que llevemos el evento a tu pueblo, trabajo u organización puedes consultarnos disponibilidad de fechas y te mandaremos un presupuesto. '
    },
    {
        question: '¿Cómo reservar para regalar la experiencia Brunchasana?',
        answer:
        'Deberas rellenar el formulario de reserva con los datos del agasajado  y le haremos llegar por mail una hermosa tarjeta digital que peudes personalizar con tu dedicatoria. Alli le daremos todos los detalles del evento. '
    },
    {
        question: 'Si soy alergica, soy vegana, soy intolerante a la lactosa... puede adaptarse el brunch a mi tipo de dieta?',
        answer:
        'Sí, obviamente, es por ello que en al momento de reservar tendrás que completar un formulario virtual en donde nos indicatas tus limitaciones alimentarias.'
    },
    
]

export default Accordion;