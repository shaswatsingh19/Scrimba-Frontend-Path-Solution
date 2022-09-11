

// Imperative way of writing react
// const h1 = document.createElement('h1')
// h1.textContent = 'hello world'
// h1.className = 'header'

// document.getElementById('root').appendChild(h1)


const root = ReactDOM.createRoot(document.getElementById('root'));

const jsx = <h1 className='header'>hello World</h1> // example of jsx syntax

// root.render(jsx)
const page = (
    <div>
        <h1>Heloo</h1>
        <p>world</p>
    </div>
)

console.log(page)

// We can only have one parent 
// root.render(
//     <div>
//         <h1>Heloo</h1>
//         <p>asd</p>
//     </div>
// )

root.render(page)




