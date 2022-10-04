import React from 'react'
import '../../css/Contact.css'
import Call from '../../icons/call.png'

function Contact () {
  return (
    <div class="contactSection">
      <div className='cIconContainer'>
        <img src={Call} alt="" />
      </div>
      <div className='cTextContainer'>
        <span className='number' style={{ fontSize: '25px', fontWeight: '900' }}>1800 592 211</span>
        <span className='promot'>24/7 Support Center</span>
      </div>
    </div>
  )
}

export default Contact