import React from 'react'
import '../../css/Card.css'
import PageBtn from '../Buttons/PageBtn'

function Card () {


  return (
    <div class="cardContainer">
      <a href="https://idirectpromo.24livehost.com/product-detail/1">
        <div class="cardImg">
          <img src="https://idirectpromo.24livehost.com/image/resizeCanvas/300/300/product_images/1661339785_08242022111625product.jpg" onerror="this.src='/frontend/images/missingImage.png'" alt="" />
        </div>
      </a>
      <div class="productName">Plastic bags </div>
      <div class="priceContainer">
        <div class="price">From: $ 1.00</div>
        <div class="code">MOQ: 120</div>
      </div>
      <div className='cBtnContainer'>
        <PageBtn text={'See Products'}></PageBtn>
      </div>
    </div>
  )
}

export default Card