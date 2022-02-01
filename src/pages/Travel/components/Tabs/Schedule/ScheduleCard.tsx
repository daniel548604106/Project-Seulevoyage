import { createOutline } from 'ionicons/icons';
import Image from 'next/image';
import React from 'react';

import { ScheduleType } from './';

interface ScheduleCardProps {
  type: ScheduleType.Flight | ScheduleType.Hotel | ScheduleType.Restaurant
  from?: {
    name: string
  }
  to?: {
    name: string
  }
  onEditBtnClick: () => void
}

const ScheduleCard = (props: ScheduleCardProps) => {
  const { type, from, to, onEditBtnClick } = props

  return (
    <div className="rounded-xl flex items-center relative p-2 h-[100px] bg-white">
      <div className="absolute top-2 left-2 right-2 flex items-center justify-between">
        <p>{type} Info</p>
        <button onClick={() => onEditBtnClick()} type="button">
          <Image width="20" height="20" src={createOutline} alt="edit" />
        </button>
      </div>
      <div className="flex flex-1 items-center justify-between">
        <button
          className="flex items-center"
          onClick={() => onEditBtnClick()}
          type="button"
        >
          <Image
            width="15"
            height="15"
            src="/img/travel/drag-handle.svg"
            alt="handle"
          />
        </button>
        {type === ScheduleType.Flight && (
          <div className="flex items-center space-x-4 text-gray-600">
            <p>
              {from?.name}
              <span className="mx-2">|</span>
            </p>
            <Image
              width="20"
              height="20"
              src="/img/travel/arrow.svg"
              alt="arrow"
            />
            <p>{to?.name}</p>
          </div>
        )}
        <div />
      </div>
    </div>
  )
}

export default ScheduleCard
