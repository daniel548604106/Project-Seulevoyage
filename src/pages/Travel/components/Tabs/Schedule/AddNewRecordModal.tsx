import Image from 'next/image'
import React, { Dispatch, SetStateAction, useState } from 'react'

import Slider from '@/modules/Slider'
import {
  IonIcon,
  IonInput,
  IonModal,
  IonSelect,
  IonSelectOption,
  IonSlide,
  IonSlides,
} from '@ionic/react'

interface AddNewRecordModalProps {
  isAddNewRecordModalOpen: boolean
  setAddNewRecordModalOpen: Dispatch<SetStateAction<boolean>>
}

const AddNewRecordModal = (props: AddNewRecordModalProps) => {
  const { isAddNewRecordModalOpen, setAddNewRecordModalOpen } = props

  const [searchedUser, setSearchedUser] = useState('')

  const [prevCalcValue, setPrevCalcValue] = useState(null)
  const [calcValue, setCalcValue] = useState(0)
  const [operator, setOperator] = useState(null)

  const calculatorArray = [
    {
      value: 7,
    },
    {
      value: 8,
    },
    {
      value: 9,
    },
    {
      value: '<',
      onClick: () => {
        if (`${calcValue}`.split('')?.length === 1) {
          setCalcValue(0)
        } else {
          const updatedValue = `${calcValue}`?.split('').slice(0, -1).join('')
          setCalcValue(+`${updatedValue}`)
        }
      },
    },
    {
      value: 4,
    },
    {
      value: 5,
    },
    {
      value: 6,
    },
    {
      value: '-',
      onClick: () => {
        setPrevCalcValue(calcValue)
        setOperator('-')
      },
    },
    {
      value: 1,
    },
    {
      value: 2,
    },
    {
      value: 3,
    },
    {
      value: '+',
      onClick: () => {
        setPrevCalcValue(calcValue)
        setOperator('+')
      },
    },
    {
      value: 'EU',
      onClick: () => {},
    },
    {
      value: 0,
    },
    {
      value: '.',
    },
    {
      value: operator ? '=' : 'ok',
      onClick: () => {
        if (operator) {
          const updatedValue = +`${prevCalcValue + calcValue}`
          setCalcValue(updatedValue)
          setOperator(null)
        }
      },
    },
  ]

  const handleCalcPress = (value, onClick) => {
    if (onClick) {
      onClick()
    } else {
      if (operator) {
        setCalcValue(0)
        setCalcValue((prev) => +`${prev}${value}`)
      } else {
        setCalcValue(+`${calcValue}${value}`)
      }
    }
  }
  return (
    <div>
      <IonModal
        cssClass="h-[100vh] flex flex-col bottom-0 fixed z-50 pt-[50px] rounded-t-lg"
        showBackdrop
        isOpen={isAddNewRecordModalOpen}
      >
        <div className="flex flex-1 flex-col">
          <div className="flex items-center justify-between px-3 py-2">
            <button
              className="flex items-center"
              onClick={() => setAddNewRecordModalOpen(false)}
            >
              <Image width="30" height="30" src="/img/close.svg" alt="close" />
            </button>
            <button
              className="px-3 py-1 text-white bg-gray-800 rounded-lg"
              type="button"
            >
              TODAY
            </button>
            <div className="w-7" />
          </div>
          <div className="flex items-center justify-between px-3 py-2">
            <IonSelect
              className="px-5 text-white text-sm bg-gradient-to-r rounded-full from-orange to-pink"
              value="daniel"
              interface="popover"
              placeholder="Select One"
              onIonChange={(e) => console.log(e)}
            >
              <IonSelectOption value="female">
                <IonIcon name="star" />
                Female
              </IonSelectOption>
              <IonSelectOption value="male">Male</IonSelectOption>
            </IonSelect>
            <div className="w-[40vw]">
              <IonInput
                className="text-right"
                placeholder="LUNCH (Tap to Edit)"
              />
            </div>
          </div>
          <div className="relative px-3 py-2 text-sm bg-gray-100">
            <IonInput placeholder="With you and ..." />
            {searchedUser && (
              <div className="h-[200px] absolute z-30 bottom-0 left-0 right-0 px-3 py-3 bg-white shadow-lg overflow-y-auto transform translate-y-full">
                asdsa
              </div>
            )}
          </div>
          <div className="w-screen">
            <Slider
              onSwiper={(swiper) => console.log(swiper)}
              slides={[
                {
                  id: '1',
                  component: (
                    <ul className="h-[200px] grid grid-cols-5 grid-rows-2 px-3 py-3 w-full bg-gray-200">
                      <li>s</li>
                      <li>2</li>
                    </ul>
                  ),
                },
                {
                  id: '2',
                  component: (
                    <ul className="h-[200px] grid grid-cols-5 grid-rows-2 px-3 py-3 w-full bg-gray-200">
                      <li>s</li>
                      <li>2</li>
                    </ul>
                  ),
                },
              ]}
            />
          </div>

          <div className="flex items-center justify-between px-2 py-3">
            <button>CASH</button>
            <div className="flex-1">{operator}</div>
            <div className="flex items-center justify-end text-3xl">
              <span className="flex items-center">
                $
                <IonInput className="w-[20vw] text-right" value={calcValue} />
              </span>
            </div>
          </div>
          <ul className="grid flex-1 grid-cols-4 grid-rows-4 text-center text-white text-xl bg-gray-900">
            {calculatorArray.map(({ value, onClick = null }) => (
              <li
                className="flex items-center justify-center h-full text-2xl"
                onClick={() => handleCalcPress(value, onClick)}
              >
                {value}
              </li>
            ))}
          </ul>
        </div>
      </IonModal>
    </div>
  )
}

export default AddNewRecordModal
