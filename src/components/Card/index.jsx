import "./Card.css"
import { Link } from "react-router-dom";


function Card(props) {

    const id = props.id;
    const cover = props.cover;
    const title = props.title;

    return (
        <Link to={`/fiche-logement/${id}`} className="card-container" >
            <img src={cover} alt={title} className="card-img" />
            <span className="card-title">{title}</span>
        </Link >
    )
}

export default Card