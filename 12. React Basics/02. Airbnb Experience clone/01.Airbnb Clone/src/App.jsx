import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Card from './components/card'
import DataArr from './data'

console.log(DataArr)

function App() {

  const DataComp = DataArr.map(data =>{
    return (
      // calling Card Component
      <Card 
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
  
  console.log(DataComp)
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {DataComp}
    </div>
  )
}

export default App
