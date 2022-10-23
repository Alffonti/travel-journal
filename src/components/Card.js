import locationPin from "../images/location-pin.png"

export default function Card(props) { 
    console.log(props.googleMapsUrl);
    return (
        <div className="card">
            <img 
                src={props.imageUrl}
                className="card--image" 
                alt=""
            />
            <div className="card--body">
                <div className="card--location-info">
                    <img src={locationPin} className="card--location-pin" alt="" />
                    <span className="card--country">{props.location}</span>
                    <a className="card--google-link" href="{props.googleMapsUrl}">View on Google Maps</a>
                </div>
                <h2 className="card--title">{props.title}</h2>
                <p className="card--dates">{props.startDate} - {props.endDate} </p>
                <p className="card--description">
                    {props.description}</p>
            </div>
        </div>
    )
}