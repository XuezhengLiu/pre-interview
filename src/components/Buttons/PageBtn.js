import React from 'react'
import '../../css/PageBtn.css'

function PageBtn (props) {
  const { text, } = props
  return (
    <div className='pageBtn'>
      <p >{text}</p>
    </div>
  )
}

export default PageBtn