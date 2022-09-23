export default function Main(props){
    return (
        <div className='main'>
            <section className="img-section">
                <img src={props.item.image} alt={props.item.title}></img>
            </section>
            <section className="details">
                <div className="location margin-btm">
                    <span>📍</span>
                    <p className="country">{props.item.location}</p>
                    <a href={props.item.googleMapsUrl} target={'_blank'}>View on Google Maps</a>
                </div>
                <h1 className="margin-btm">{props.item.title}</h1>
                <h4 className="margin-btm"><span>{props.item.startDate}</span> - <span>{props.item.endDate}</span></h4>
                <p>{props.item.description}</p>
            </section>
        </div>
    )
}