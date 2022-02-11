import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import Button from '@/modules/Button'
import Slider from '@/modules/Slider'
import { setOnBoardingModalOpen } from '@/slices/commonSlice'
import { IonContent, IonModal } from '@ionic/react'

const Onboarding = () => {
  const dispatch = useAppDispatch()
  const isOnBoardingModalOpen = useAppSelector(
    (state) => state.common.isOnBoardingModalOpen
  )
  const [step, setStep] = useState(1)
  const [swiperInstance, setSwiperInstance] = useState(null)
  const onSwiper = (swiper) => {
    setSwiperInstance(swiper)
  }

  useEffect(() => {
    setStep(swiperInstance?.activeIndex + 1)
    console.log(swiperInstance)
  }, [swiperInstance?.activeIndex, swiperInstance])
  return (
    <IonModal isOpen={isOnBoardingModalOpen}>
      <IonContent>
        <Slider
          onSwiper={(swiper) => onSwiper(swiper)}
          slides={[
            {
              id: '1',
              component: (
                <div className="min-h-[70vh] pb-10 pt-5 px-5 text-center space-y-5">
                  <div className="pb-[120%] relative mt-4 w-full">
                    <Image
                      objectFit="cover"
                      layout="fill"
                      alt="welcome"
                      src="/img/onboarding/welcome-1.jpg"
                    />
                  </div>
                  <h2 className="mt-4 text-3xl font-semibold">
                    We Connect People
                  </h2>
                  <p>
                    Connecting people through one platform to share the memories
                    together.
                  </p>
                </div>
              ),
            },
            {
              id: '2',
              component: (
                <div className="min-h-[70vh] pb-10 pt-5 px-5 text-center space-y-5">
                  <div className="pb-[120%] relative mt-4 w-full">
                    <Image
                      objectFit="cover"
                      layout="fill"
                      alt="welcome"
                      src="/img/onboarding/welcome-2.jpg"
                    />
                  </div>
                  <h2 className="mt-4 text-3xl font-semibold">
                    Sharing Happiness
                  </h2>
                  <p>
                    Sharing happiness by sharing your memories in SeuleVoyage
                    platform.
                  </p>
                </div>
              ),
            },
            {
              id: '3',
              component: (
                <div className="min-h-[70vh] pb-10 pt-5 px-5 text-center space-y-5">
                  <div className="pb-[120%] relative mt-4 w-full">
                    <Image
                      objectFit="cover"
                      layout="fill"
                      alt="welcome"
                      src="/img/onboarding/welcome-3.jpg"
                    />
                  </div>
                  <h2 className="mt-4 text-3xl font-semibold">
                    Last Long Memories
                  </h2>
                  <p>
                    You can store memories of your photos in SeuleVoyage app
                    without limit.
                  </p>
                </div>
              ),
            },
          ]}
        />
        <div className="mt-6 mx-5">
          <Button
            text={`${step === 3 ? 'Get Started' : 'Next'}`}
            onClick={() => {
              if (step === 3) {
                dispatch(setOnBoardingModalOpen(false))
              } else {
                setStep((step) => step + 1)
                swiperInstance?.slideNext()
              }
            }}
          />
        </div>
      </IonContent>
    </IonModal>
  )
}

export default Onboarding
