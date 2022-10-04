import React from 'react'
import '../css/SubBar.css'
import PromtSection from './Sections/PromtSection'
import SearchBar from './Sections/SearchBar'
import Cart from './Sections/Cart'
import HeadLogo from '../logos/9o2ymU1yqvzgNAat890x2OABEWWy2VPNGiWN6H2V.png'
import Gift from '../icons/product-inline.png'
import Calender from '../icons/calendar.png'
import Shield from '../icons/shield.png'

function SubBar () {
  return (
    <div className='subBar'>
      <div>
        <a href="https://idirectpromo.24livehost.com">
          <img src={HeadLogo} alt="" />
        </a>
      </div>
      <div className='promotContainer'>
        <PromtSection icon={Gift} spanAbove={'Over 15000'} spanBelow={'Products Online'}></PromtSection>
        <PromtSection icon={Calender} spanAbove={'20+ Years'} spanBelow={'in Industry'}></PromtSection>
        <PromtSection icon={Shield} spanAbove={'Quality + Services'} spanBelow={'Lowest Prices'}></PromtSection>
      </div>
      <div className='searchContainer'>
        <SearchBar></SearchBar>
      </div>
      <div className='cartContainer'>
        <Cart></Cart>
      </div>
    </div>
  )
}

export default SubBar