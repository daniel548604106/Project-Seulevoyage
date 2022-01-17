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
    name: 'paris',
    id: '4',
    img: '/img/cities/paris.jpg',
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
]

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
              className="bg-gray-100 "
            />
            <Image width="20" height="20" src={searchOutline} alt="search" />
          </IonItem>
        </div>
        <div className="flex items-center flex-nowrap whitespace-nowrap w-full overflow-x-auto mb-3">
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
        <div className={`${classes['wrapper']}`}>
          {Cities.map(({ name, img, id }, index) => (
            <div
              onClick={() => handleCardClick({ name, id })}
              className={`relative `}
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
                  selectedDestinations.map(({ id }) => id).indexOf(id) !== -1 &&
                  'opacity-50'
                }`}
                width="100%"
                height="100%"
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
