import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import mainData from './dataMain'
import footerData from './dataFooter'
export default function App(){

    const mainComp = mainData.map(data => {
        return (
            <Main 
                key={data.id}
                item={data}  
            />
        )
    })

    const footerComp = footerData.map(data => {
        return (
            <Footer 
                key = {data.id}
                item = {data}
            />
        )
    })
    return (
        <div id='container'>
            <Header />
            {mainComp}
            <section className='footer-section'>
                {footerComp}
            </section>
        </div>
    )
}