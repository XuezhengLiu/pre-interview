import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import ReviewCard from "./Sections/ReviewCard"

function ReviewSlider () {
  return (
    <div className='rSliderContainer'>
      <Swiper
        slidesPerView={5}
        centeredSlides={true}
        spaceBetween={20}
        grabCursor={true}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide><ReviewCard /></SwiperSlide>
        <SwiperSlide><ReviewCard /></SwiperSlide>
        <SwiperSlide><ReviewCard /></SwiperSlide>
        <SwiperSlide><ReviewCard /></SwiperSlide>
        <SwiperSlide><ReviewCard /></SwiperSlide>
        <SwiperSlide><ReviewCard /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ReviewSlider