import { useEffect, useState } from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination])

interface SliderProps {
  slides: { id: string; component: React.ReactNode }[]
  initialSlide?: number
  onSwiper: (swiper: SwiperCore) => void
}

const Slider = ({ slides = [], initialSlide = 0, onSwiper }: SliderProps) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore>()
  const [activeSlide, setActiveSlide] = useState<number>(1)
  const handleGetIndex = (swiper: SwiperCore) => {
    setActiveSlide(+(swiper.activeIndex + 1))
  }

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    if (swiperInstance !== null) {
      timeout = setTimeout(() => swiperInstance?.update(), 500)
    }
    return () => {
      clearTimeout(timeout)
    }
  }, [swiperInstance])

  return (
    <Swiper
      onSlideChange={(swiper) => {
        handleGetIndex(swiper)
      }}
      initialSlide={initialSlide}
      onSwiper={(swiper) => {
        setSwiperInstance(swiper)
        onSwiper(swiper)
      }}
      pagination={slides.length > 1}
    >
      {slides.map((page) => (
        <SwiperSlide key={page.id}>{page.component}</SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Slider
