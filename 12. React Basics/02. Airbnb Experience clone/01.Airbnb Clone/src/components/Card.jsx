import starPng from '../assets/star.png'

 
export default function Card(props){

    return (
        <div className='card'>
            <div className="card-img">
                {/* <img src={`./src/assets/${props.img}`} alt='user images'></img> */}
                <img src={`${props.img}`} alt='user images'></img>
                
                <p className="availablity">{props.isAvailable}</p>
            </div>
        
            <div className='rating'>
                <img src={starPng} alt='star icon'></img>
                <span className='current-rating'>{props.rating}</span>  
                <span className='rated-by'>({props.reviewCount}) • </span>  
                <span className='country'>{props.country}</span>  
            </div>
            <p className='title'>{props.title}</p>
            <p><strong>From</strong> <span className='price'>${props.price}</span> / person</p> 
        </div>
    )
} 