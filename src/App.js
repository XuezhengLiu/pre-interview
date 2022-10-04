import './App.css'
import TopBar from './components/TopBar'
import SubBar from './components/SubBar'
import NavBar from './components/NavBar'
import Slider from './components/Slider'
import TextCenter from './components/TextCenter'
import ProductMenu from './components/ProductMenu'
import DeliveryContainer from './components/DeliveryContainer'



function App () {
  return (
    <div className="App">
      <TopBar></TopBar>
      <SubBar></SubBar>
      <NavBar></NavBar>
      <Slider></Slider>
      <TextCenter></TextCenter>
      <ProductMenu></ProductMenu>
      <DeliveryContainer></DeliveryContainer>
    </div>
  )
}

export default App
