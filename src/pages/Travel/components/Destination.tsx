import { searchOutline } from 'ionicons/icons';
import Tag from 'modules/Tag';
import Image from 'next/image';
import React, { useState } from 'react';

import IonCustomContent from '@/modules/IonCustomContent';
import { IonInput, IonItem } from '@ionic/react';

import classes from './destination.module.scss';

const Cities = [
  {
    name: 'barcelona',
    id: '1',
    img: '/img/cities/barcelona.jpg',
  },
  {
    name: 'brussel',
    id: '2',
    img: '/img/cities/brussel.png',
  },
  {
    name: 'italy',
    id: '3',
    img: '/img/cities/italy.jpg',
  },

  {
    name: 'rome',
    id: '5',
    img: '/img/cities/rome.jpg',
  },
  {
    name: 'taipei',
    id: '6',
    img: '/img/cities/taipei.jpg',
  },
  {
    name: 'venice',
    id: '7',
    img: '/img/cities/venice.jpg',
  },
  {
    name: 'venicsdfe',
    id: '8',
    img: '/img/cities/venice.jpg',
  },
  {
    name: 'venice',
    id: '9',
    img: '/img/cities/venice.jpg',
  },
]

const isLargeImg = (index) => {
  let arr = [1]
  while (arr[arr.length - 1] <= index) {
    const isEven = arr.length % 2 === 0
    let nextValue = arr[arr.length - 1] + (isEven ? 10 : 8)
    arr.push(nextValue)
  }
  return arr.indexOf(index) !== -1
}

const Destination = () => {
  const [isInputFocused, setInputFocused] = useState(false)
  const [selectedDestinations, setSelectedDestinations] = useState([])
  console.log(selectedDestinations)

  const handleCardClick = ({ name, id }: { name: string; id: string }) => {
    setSelectedDestinations([...selectedDestinations, { text: name, id }])
  }
  return (
    <IonCustomContent>
      <div>
        <div className="flex items-center justify-between">
          {!isInputFocused && (
            <h2 className="text-lg font-bold">Recommended</h2>
          )}
          <IonItem
            className={`${
              isInputFocused ? 'w-full ' : 'w-c-150'
            } flex transition-all duration-150 items-center mb-3 p-1 px-2 rounded-full text-xs bg-gray-100`}
          >
            <IonInput
              clearInput
              type="text"
              debounce={116}
              placeholder="Featured"
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
              className="bg-gray-100"
            />
            <Image width="20" height="20" src={searchOutline} alt="search" />
          </IonItem>
        </div>
        <div className="flex flex-nowrap items-center mb-3 py-2 w-full whitespace-nowrap overflow-x-auto">
          {selectedDestinations.map(({ text, id }) => (
            <div key={id} className="mr-1">
              <Tag
                onClick={() =>
                  setSelectedDestinations((prev) =>
                    prev.filter((dest) => dest.id !== id)
                  )
                }
                isIconVisible
                key={text}
                text={text}
              />
            </div>
          ))}
        </div>
        <div className={`grid grid-cols-3 gap-3 overflow-y-auto`}>
          {Array.from({ length: 60 })
            .fill({
              name: 'paris',
              id: '4',
              img: '/img/cities/paris.jpg',
            })
            .map(({ name, img, id }, index) => (
              <div
                onClick={() => handleCardClick({ name, id })}
                className={`relative w-full pb-[100%] ${
                  isLargeImg(index) && 'col-span-2 row-span-2'
                } `}
                key={id}
              >
                <span
                  className={`${
                    selectedDestinations.map(({ id }) => id).indexOf(id) !== -1
                      ? 'block'
                      : 'hidden'
                  } absolute z-10 bottom-3 right-3 `}
                >
                  <Image
                    width="18"
                    height="18"
                    src="/img/checked-circle.svg"
                    alt="checked"
                  />
                </span>
                <Image
                  className={`${
                    selectedDestinations.map(({ id }) => id).indexOf(id) !==
                      -1 && 'opacity-50'
                  }`}
                  layout="fill"
                  src={img}
                  alt={name}
                />
              </div>
            ))}
        </div>
      </div>
    </IonCustomContent>
  )
}

export default Destination
