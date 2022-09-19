import starPng from '../assets/star.png'

 
export default function Card(props){
    let badgeText
    if (props.item.openSpots === 0){
        badgeText = 'Sold Out'
    }else if(props.item.location === 'Online'){
        badgeText = 'Online'
    }
    console.log(props)
    return (
        <div className='card'>
            <div className="card-img">           
                <img src={`${props.item.coverImg}`} alt='user images'></img>
                {/* if there is badgeText then show the option of sold out or online else nothing */}
               {badgeText && <p className="availablity">{badgeText}</p>}
            </div>
        
            <div className='rating'>
                <img src={starPng} alt='star icon'></img>
                <span className='current-rating'>{props.item.stats.rating}</span>  
                <span className='rated-by'>({props.item.stats.reviewCount}) • </span>  
                <span className='country'>{props.item.location}</span>  
            </div>
            <p className='title'>{props.item.title}</p>
            <p><strong>From</strong> <span className='price'>${props.item.price}</span> / person</p> 
        </div>
    )
} 