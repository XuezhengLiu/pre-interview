import { React } from 'react'
import { useSwiper } from 'swiper/react'

import leftArrow from "../../icons/left-arrow.png"
import rightArrow from "../../icons/right-arrow.png"

function SlideBtn ({ direction }) {

  const swiper = useSwiper()


  return (
    <button className={direction === "next" ? 'sBtn next cardn' : 'sBtn prev cardp'} onClick={() => direction === "next" ? swiper.slideNext() : swiper.slidePrev()}>
      <img src={direction === "next" ? rightArrow : leftArrow} alt='' />
    </button>
  )
}

export default SlideBtn