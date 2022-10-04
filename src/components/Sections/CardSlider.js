import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import '../../css/CardSlider.css'
import Card from './Card'
import SlideBtn from '../Buttons/SlideBtn'

function CardSlider () {
  return (
    <div className='cardSlider'>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SlideBtn direction={'Prev'}></SlideBtn>
        <SlideBtn direction={'next'}></SlideBtn>
      </Swiper>
    </div>
  )
}

export default CardSlider