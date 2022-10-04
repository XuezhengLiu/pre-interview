import '../css/ProductMenu.css'
import CardSlider from './Sections/CardSlider'
import PageBtn from './Buttons/PageBtn'
import { useState } from 'react'

function ProductMenu () {
  const [content, setContent] = useState('Latest')
  const [isFocused, setIsFocused] = useState(0)

  const setFocus = (mum) => {
    setIsFocused(mum)
  }

  const showContent = () => {

    if (content === 'Text') {
      return (
        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
      )
    }
    else if (content === 'Latest') {
      return (
        <CardSlider></CardSlider>
      )
    }
    else {
      return (
        <CardSlider></CardSlider>
      )
    }
  }

  return (
    <div className='productMenu'>
      <div className='pBtnWrapper'>
        <div className='pBtnContainer'>
          <button className={isFocused === 1 ? 'unselected' : 'selected'} onClick={() => setContent('Text')} onFocus={() => setFocus(1)}>Why Idirectpromo</button>
          <button className={isFocused === 2 ? 'unselected' : 'selected'} onClick={() => setContent('Latest')} onFocus={() => setFocus(2)}>Latest Product</button>
          <button className={isFocused === 3 ? 'unselected' : 'selected'} onClick={() => setContent('Best')} onFocus={() => setFocus(3)}>Best Seller</button>
        </div>
      </div>
      <div className='menuContainer'>
        {showContent()}
      </div>
      <div className='pageBtnContainer'>
        <PageBtn text={'View All'} />
      </div>
    </div>
  )
}

export default ProductMenu