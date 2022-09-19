import starPng from '../assets/star.png'

 
export default function Card(props){
    let badgeText
    if (props.openSpots === 0){
        badgeText = 'Sold Out'
    }else if(props.location === 'Online'){
        badgeText = 'Online'
    }
    return (
        <div className='card'>
            <div className="card-img">
                <img src={`../public/${props.img}`} alt='user images'></img>
                {/* <img src={`${props.img}`} alt='user images'></img> */}
                {/* if there is badgeText then show the option of sold out or online else nothing */}
               {badgeText && <p className="availablity">{badgeText}</p>}
            </div>
        
            <div className='rating'>
                <img src={starPng} alt='star icon'></img>
                <span className='current-rating'>{props.rating}</span>  
                <span className='rated-by'>({props.reviewCount}) • </span>  
                <span className='country'>{props.location}</span>  
            </div>
            <p className='title'>{props.title}</p>
            <p><strong>From</strong> <span className='price'>${props.price}</span> / person</p> 
        </div>
    )
} 