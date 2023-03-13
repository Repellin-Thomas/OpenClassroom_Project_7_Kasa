import './HostCard.css'


function HostCard(props) {
    const hostName = props.name;
    const hostPicture = props.picture

    return (<div className="host-card-container">
        <span className="host-name">{hostName}</span>
        <img src={hostPicture} alt={hostName} className="host-img" />
    </div>

    )
}

export default HostCard