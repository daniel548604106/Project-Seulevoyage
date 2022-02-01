import { createOutline, menuOutline } from 'ionicons/icons';
import Image from 'next/image';
import React from 'react';

import { ScheduleType } from './';

interface ScheduleCardProps {
  type: ScheduleType.Flight | ScheduleType.Hotel | ScheduleType.Restaurant
  onEditBtnClick: () => void
}

const ScheduleCard = (props: ScheduleCardProps) => {
  const { type, onEditBtnClick } = props
  return (
    <div className="rounded-xl p-2 h-[70px] bg-white">
      <div className="flex items-center justify-between">
        <p>{type} Info</p>
        <button onClick={() => onEditBtnClick()} type="button">
          <Image width="20" height="20" src={createOutline} alt="edit" />
        </button>
      </div>
      <Image width="20" height="20" src={menuOutline} alt="edit" />
    </div>
  )
}

export default ScheduleCard
