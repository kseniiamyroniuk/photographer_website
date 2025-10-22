import '../componentsCSS/Filmroll.css'

function Filmroll({src, alt}) {
    return(
        <div className="film-frame">
            <img src={src} alt={alt} />
        </div>

    )
}

export default Filmroll;