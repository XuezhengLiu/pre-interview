import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "../css/Slider.css"
import SlideBtn from "./Buttons/SlideBtn"
import Picture from '../pictures/banner_.jpg'

function Slider () {
  return (
    <>
      <Swiper loop={true} className="mySwiper carousel">
        <SwiperSlide>
          <img src={Picture} alt="" />
        </SwiperSlide>
        <SwiperSlide><img src={Picture} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Picture} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Picture} alt="" /></SwiperSlide>
        <SlideBtn direction={'Prev'}></SlideBtn>
        <SlideBtn direction={'next'}></SlideBtn>
      </Swiper>
    </>
  )
}

export default Slider
