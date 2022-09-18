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
          img= {data.coverImg}
          rating={data.stats.rating}
          reviewCount={data.stats.reviewCount}
          country= {data.location}
          title={data.title}
          price={data.price}
          isAvailable = {data.openSpots ? `${data.openSpots} spots Left` : 'Sold Out'}
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
