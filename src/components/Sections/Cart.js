import React from 'react'
import '../../css/Cart.css'
import Cart from '../../icons/cart.png'

function cart () {
  return (
    <div class="cartContainer">
      <a href="https://idirectpromo.24livehost.com/cartlist" target="_blank" rel="noreferrer">
        <img src={Cart} alt="" />
      </a>
      <span>0 item(s)</span>
    </div>
  )
}

export default cart