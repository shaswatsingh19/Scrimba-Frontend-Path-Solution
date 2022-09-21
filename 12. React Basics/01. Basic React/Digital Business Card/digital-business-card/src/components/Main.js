export default function Header(props){
    return (
        <main>
            <div className='main-div'>
                <h3>{props.item.id}</h3>
                <p>{props.item.content}</p>     
            </div>
        </main>
    )
}