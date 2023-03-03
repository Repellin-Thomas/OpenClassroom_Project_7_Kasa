import "../../style/Card.css"
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";


function Card(props) {

    const id = props.id;
    const cover = props.cover;
    const title = props.title;
    const urlWithId = "/fiche-logement/" + id
    return (
        <Link to={urlWithId} className="card-container" >
            <img src={cover} alt="photo principale du logement" className="card-img" />
            <span className="card-title">{title}</span>
        </Link >
    )
}

export default Card