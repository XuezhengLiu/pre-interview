import TextBtn from './Buttons/TextBtn'
import AllProduct from './Sections/AllProduct'
import Contact from './Sections/Contact'
import '../css/NavBar.css'
import * as FaIcons from 'react-icons/fa'

function NavBar () {
  return (
    <div className='NavMenu'>
      <div className='sideIcon'>
        <FaIcons.FaBars fontSize={'30px'} />
      </div>
      <div className='navWrapper'>
        <AllProduct></AllProduct>
        <TextBtn size={'16px'} text={'Hot Products'} link={'https://www.youtube.com/'} weight={'500'}></TextBtn>
        <TextBtn size={'16px'} text={'Brands'} link={'https://www.youtube.com/'} weight={'500'}></TextBtn>
        <TextBtn size={'16px'} text={'Sourcing'} link={'https://www.youtube.com/'} weight={'500'}></TextBtn>
        <TextBtn size={'16px'} text={'Clerance'} link={'https://www.youtube.com/'} weight={'500'}></TextBtn>
        <TextBtn size={'16px'} text={'Eco Friendly'} link={'https://www.youtube.com/'} weight={'500'}></TextBtn>
        <TextBtn size={'16px'} text={'About Us'} link={'https://www.youtube.com/'} weight={'500'}></TextBtn>
      </div>
      <Contact></Contact>
    </div>
  )
}

export default NavBar