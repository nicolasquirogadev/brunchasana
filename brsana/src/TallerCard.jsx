import './Talleres.css'

function TallerCard( {title, ptext, schedule, img1src, img2src, img3src}  ) {

    return (
        <>
        <div className="ta-card">
                <div className="card-img-container">
                <img id='ta-img1' src={img1src} alt="taller foto" />
                <img id='ta-img2' src={img2src} alt="taller foto" />
                <img id='ta-img3' src={img3src} alt="taller foto" />
            </div>
            <div className="ta-card-right">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{ptext}</p>
            <i className="card-schedule">{schedule}</i>
            <button className="card-btn">Inscribirme</button>
            </div>
            
        </div>
        </>
    )
}

export default TallerCard