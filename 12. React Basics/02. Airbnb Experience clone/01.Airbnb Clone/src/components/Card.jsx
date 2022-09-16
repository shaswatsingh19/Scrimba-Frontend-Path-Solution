import KatieImg from '../assets/katie-zaferes.png'
import starPng from '../assets/star.png'

 
export default function Card(){

    return (
        <div className='card'>
            <div className="card-img">
                <img src={KatieImg} alt='user images'></img>
                <p className="availablity">Sold Out</p>
            </div>
        
            <div className='rating'>
                <img src={starPng} alt='star icon'></img>
                <span className='current-rating'>5.0</span>  
                <span className='rated-by'>(6) • </span>  
                <span className='country'>USA</span>  
            </div>
            <p className='title'>Life lesson with Katie Zaferes</p>
            <p><strong>From</strong> <span class='price'>$136</span> / person</p>
        
        </div>
    )
} 