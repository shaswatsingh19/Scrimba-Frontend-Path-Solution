import Navbar from './components/Navbar'
import Main from './components/Main'
import Data from './data'
function App() {

  
  const main = Data.map(data => {
    return (
      <Main 
        key = {data.id}
        item = {data}
      
      />
    )
  })

  return (
    <div id='container'>
      <Navbar />
      {main}
    </div>
  )
}


export default App
