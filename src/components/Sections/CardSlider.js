import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import '../../css/CardSlider.css'
import Card from './Card'
import SlideBtn from '../Buttons/SlideBtn'
import PageBtn from '../Buttons/PageBtn'

function CardSlider () {
  return (
    <div className='cardSlider'>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={5}
        grabCursor={true}
        className="mySwiper"
      >
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SlideBtn direction={'Prev'}></SlideBtn>
        <SlideBtn direction={'next'}></SlideBtn>
      </Swiper>

      <div className='pageBtnContainer'>
        <PageBtn text={'View All'} />
      </div>
    </div>
  )
}

export default CardSlider