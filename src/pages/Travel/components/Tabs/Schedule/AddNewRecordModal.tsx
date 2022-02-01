import Image from 'next/image';
import React, { Dispatch, SetStateAction, useState } from 'react';

import {
    IonIcon, IonInput, IonModal, IonSelect, IonSelectOption, IonSlide, IonSlides
} from '@ionic/react';

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
        cssClass="h-[100vh] flex flex-col bottom-0 fixed z-50 pt-[100px] rounded-t-xl"
        showBackdrop
        isOpen={isAddNewRecordModalOpen}
      >
        <div className="flex flex-col flex-1">
          <div className="flex items-center justify-between py-2 px-3">
            <button
              className="flex items-center"
              onClick={() => setAddNewRecordModalOpen(false)}
            >
              <Image width="30" height="30" src="/img/close.svg" alt="close" />
            </button>
            <button
              className="bg-gray-800 text-white px-3 py-1 rounded-lg"
              type="button"
            >
              TODAY
            </button>
            <div className="w-7" />
          </div>
          <div className="flex items-center px-3 py-2 justify-between">
            <IonSelect
              className="rounded-full px-5 text-sm bg-gradient-to-r from-orange to-pink  text-white"
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
            <div className="w-[40vw] ">
              <IonInput
                className="text-right"
                placeholder="LUNCH (Tap to Edit)"
              />
            </div>
          </div>
          <div className="px-3 py-2 text-sm relative bg-gray-100 ">
            <IonInput placeholder="With you and ..." />
            {searchedUser && (
              <div className="absolute left-0 z-30 right-0 bg-white py-3 h-[200px] overflow-y-auto px-3 bottom-0 transform translate-y-full shadow-lg">
                asdsa
              </div>
            )}
          </div>
          <IonSlides pager={true}>
            <IonSlide className="w-screen">
              <ul className="px-3 w-full py-3 bg-gray-700 h-[200px] grid grid-cols-5 grid-rows-2">
                <li>s</li>
                <li>2</li>
              </ul>
            </IonSlide>
            <IonSlide className="w-screen">
              <ul className="px-3 w-full py-3 bg-gray-700 h-[200px] grid grid-cols-5 grid-rows-2">
                <li>s</li>
                <li>2</li>
              </ul>
            </IonSlide>
          </IonSlides>

          <div className="flex items-center justify-between py-3 px-2">
            <button>CASH</button>
            <div className="flex-1">{operator}</div>
            <div className="text-3xl flex justify-end items-center">
              <span className="flex items-center">
                $
                <IonInput className="text-right w-[20vw]" value={calcValue} />
              </span>
            </div>
          </div>
          <ul className="bg-gray-900 text-center flex-1 grid grid-cols-4 grid-rows-4 text-white text-xl">
            {calculatorArray.map(({ value, onClick = null }) => (
              <li
                className="h-full text-2xl flex items-center justify-center"
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
