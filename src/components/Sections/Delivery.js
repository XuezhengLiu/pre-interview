import '../../css/Delivery.css'

function Delivery (props) {
  const { icon, spanAbove, spanBelow } = props
  return (
    <div class="deliverySection">
      <div className='dIconContainer'>
        <img src={icon} alt="" />
      </div>
      <div className='dTextContainer'>
        <h3>{spanAbove}</h3>
        <p> {spanBelow}</p>
      </div>
    </div>
  )
}

export default Delivery