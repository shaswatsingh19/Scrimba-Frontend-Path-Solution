export default function Footer(props){
    return (
        <footer>
            <a href={props.item.link} target={"_blank"} rel={"noreferrer"}>
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d={props.item.destination} fill={props.item.fill}/>
                </svg>
            </a>
        </footer>
    )
}