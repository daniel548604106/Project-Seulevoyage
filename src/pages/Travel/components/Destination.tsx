import { searchOutline } from 'ionicons/icons';
import IonCustomContent from 'modules/IonCustomContent';
import Tag from 'modules/Tag';
import Image from 'next/image';
import React, { useState } from 'react';

import { IonInput, IonItem } from '@ionic/react';

const destinations = [
  { text: 'barcelona', id: 'sdfsdfsdfsdfs' },
  { text: 'japan', id: 'sdfsdfsdfasdxxwsdfs' },
];
const Destination = () => {
  const [isInputFocused, setInputFocused] = useState(false);
  const [selectedDestinations, setSelectedDestinations] = useState(destinations);
  console.log(selectedDestinations);
  return (
    <IonCustomContent>
      <div className="h-full">
        <div className="flex items-center justify-between">
          {!isInputFocused && <h2 className="text-lg font-bold">Recommended</h2>}
          <IonItem
            className={`${
              isInputFocused ? 'w-full ' : 'w-c-150'
            } flex transition-all duration-150 items-center p-1 px-2 rounded-full text-xs bg-gray-100`}
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
        <div className="flex items-center">
          {selectedDestinations.map(({ text, id }) => (
            <div key={id} className="mr-1">
              <Tag
                onClick={() => setSelectedDestinations(prev => prev.filter(dest => dest.id !== id))}
                isIconVisible
                key={text}
                text={text}
              />
            </div>
          ))}
        </div>
      </div>
    </IonCustomContent>
  );
};

export default Destination;
