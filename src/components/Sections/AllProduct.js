import React from 'react'
import '../../css/AllProduct.css'
import BrandBtn from '../Buttons/BrandBtn'
import ProductIcon from '../../icons/product-menu-icon.png'

function AllProduct () {
  return (
    <div className='apContainer'>
      <a className="viewAll" href=';'>
        <img src={ProductIcon} alt="" />
        View All Products
        <i class="fa-solid fa-chevron-down"></i>
      </a>

      <div className='allBrand'>
        <div>
          <BrandBtn type={'categories'} text={'Writing Instruments'} icon={""}></BrandBtn>
          <BrandBtn size={'brands'} text={'Klio-eterna Germany Pens'} icon={"fa-solid fa-circle"}></BrandBtn>
          <BrandBtn size={'brands'} text={'Stock Items'} icon={"fa-solid fa-chevron-right"}></BrandBtn>
          <BrandBtn size={'brands'} text={'Offshore Indent'} icon={"fa-solid fa-chevron-right"}></BrandBtn>
        </div>
      </div>
    </div>
  )
}

export default AllProduct