
import { Link } from "react-router-dom"
import './Error.css'

function ErrorPage() {

    return (
        <div>
            <div className="error-container">
                <h1 className="error-title">404</h1>
                <h2 className="error-description">Oups! La page que vous demandez n'existe pas.</h2>
                <Link to="/" className="error-link">Retourner sur la page d'accueil</Link>
            </div>
        </div>
    )
}


export default ErrorPage