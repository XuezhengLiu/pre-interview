import '../css/DeliveryContainer.css'
import Delivery from './Sections/Delivery'
import express from '../icons/express.png'
import freeDeliveru from '../icons/free-delivery.png'
import ourGaurantee from '../icons/our-gaurantee.png'
import bestPrice from '../icons/best-price.png'

function DeliveryContainer () {
  return (
    <div className='cardSection'>
      <Delivery icon={express} spanAbove={'Express Services'} spanBelow={' 24/7 amazing services'}></Delivery>
      <Delivery icon={freeDeliveru} spanAbove={'Free Delivery'} spanBelow={' Free Delivery services'}></Delivery>
      <Delivery icon={ourGaurantee} spanAbove={'Our Guarantee'} spanBelow={' Guarantee services'}></Delivery>
      <Delivery icon={bestPrice} spanAbove={'Best Prices & Offers'} spanBelow={' Order $50 or more'}></Delivery>
    </div>
  )
}

export default DeliveryContainer