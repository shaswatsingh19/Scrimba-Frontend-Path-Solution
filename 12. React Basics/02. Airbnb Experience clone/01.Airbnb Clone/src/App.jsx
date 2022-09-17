import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Card from './components/card'


function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card 
          img='katie-zaferes.png'
          rating={5.0}
          reviewCount={6}
          country='USA'
          title='Life lesson with Katie Zaferes'
          price={136}
      />
    </div>
  )
}

export default App
