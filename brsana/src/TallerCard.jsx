import './Talleres.css'

function TallerCard( {title, ptext, schedule, img1src, img2src, img3src}  ) {

    return (
        <>
        <div className="ta-card">
                <div className="card-img-container">
                <img id='ta-img1' src={img1src} srcSet={img1src} loading='lazy' alt="taller foto" />
                <img id='ta-img2' src={img2src} srcSet={img2src} loading='lazy' alt="taller foto" />
                <img id='ta-img3' src={img3src} srcSet={img3src} loading='lazy' alt="taller foto" />
            </div>
            <div className="ta-card-right">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{ptext}</p>
            <i className="card-schedule">{schedule}</i>
            <a href="https://forms.gle/cW6bh9XnbFcjCgbu9" target="_blank">
                <button className="card-btn">Inscribirme</button>
                </a>
            </div>
        </div>
        </>
    )
}

export default TallerCard