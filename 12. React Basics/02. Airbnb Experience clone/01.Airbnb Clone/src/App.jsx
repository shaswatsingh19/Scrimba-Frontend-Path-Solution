import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Card from './components/card'
import DataArr from './data'


function App() {

  const cards = DataArr.map(data =>{
    return (
      // calling Card Component
      <Card 
          // key is important while using map() method
          key = {data.id}
          // put the the property into a single object
          item = {data}
          /*
          can also do like this too to send property to component 
          which create a single object each time it render
          {...data}
           */
      />
    )
  })
  
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {cards}
      </section>
    </div>
  )
}

export default App
