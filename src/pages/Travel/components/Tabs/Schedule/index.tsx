import React, { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';

import ScheduleCard from './ScheduleCard';

export enum ScheduleType {
  'Flight' = 'Flight',
  'Hotel' = 'Hotel',
  'Restaurant' = 'Restaurant',
}

const Schedule = () => {
  const [scheduleList, setScheduleList] = useState([
    {
      id: 1,
      type: ScheduleType.Flight,
      from: {
        name: 'London',
      },
      to: {
        name: 'Paris',
      },
    },
    { id: 2, type: ScheduleType.Hotel },
  ])

  const handleEditBtnClick = () => {
    console.log('cicked')
  }
  return (
    <div>
      <div className="px-4 py-2 flex items-center justify-between">
        <div className="">Day 1</div>
        <div className="flex items-center space-x-2">
          <span>Total Expense</span>
          <button
            className="rounded-full px-2 py-1 border border-gray-700"
            type="button"
          >
            $27000
          </button>
        </div>
      </div>
      <div className="bg-gray-100 p-2 flex">
        <div className="relative">
          <div className="rounded-full bg-gray-500 w-[10px] h-[10px] absolute top-0 left-0 transform -translate-x-1/2"></div>
          <div className="w-[1px] h-full bg-gray-500 mr-4"></div>
          <div className="rounded-full bg-gray-500 w-[10px] h-[10px] absolute bottom-0 left-0 transform -translate-x-1/2"></div>
        </div>
        <div className="flex-1">
          <ReactSortable list={scheduleList} setList={setScheduleList}>
            {scheduleList.map(({ id, type }) => (
              <div className="mb-4" key={id}>
                <ScheduleCard
                  type={type}
                  onEditBtnClick={() => handleEditBtnClick()}
                />
              </div>
            ))}
          </ReactSortable>
        </div>
      </div>
    </div>
  )
}

export default Schedule
