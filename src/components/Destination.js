import pingImg from "../images/ping.png"

export default function Destination(props){
    return(
        <section className="destination">
            <img className="picture" src={props.destination.picture} />
            <div className="cardText">
                <div className="header">
                    <img className="ping" src={pingImg} />
                    <h3 className="country">{props.destination.country.toUpperCase()}</h3>
                    <a className="maps" target="_blank" href={props.destination.mapsLink}>View on Google Maps</a>
                </div>
                <h2 className="title">{props.destination.location}</h2>
                <p className="dates">
                    <span className="dateStart">{props.destination.dateStart}</span>
                    {props.destination.dateFinish && <span className="dateFinish"> - {props.destination.dateFinish}</span>}
                </p>
                <p className="description">{props.destination.description}</p>
            </div>
        </section>
    )
}
