
import './Baner.css'


function Baner(props) {
    const size = props.size
    const content = props.content
    const image = props.image
    const banerClass = "baner-container" + size


    return (
        <div className="baner-container">
            <img src={image} alt="bannière de la page" className="baner-img" />
            <span className="baner-title">{content}</span>
        </div>

    )
}

export default Baner