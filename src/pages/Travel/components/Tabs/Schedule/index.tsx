import Image from 'next/image';
import React, { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';

import AddNewRecordModal from './AddNewRecordModal';
import ExpenseRecordModal from './ExpenseRecordModal';
import ScheduleCard from './ScheduleCard';

export enum ScheduleType {
  'Flight' = 'Flight',
  'Hotel' = 'Hotel',
  'Restaurant' = 'Restaurant',
}

const Schedule = () => {
  const [isExpenseRecordModalOpen, setExpenseRecordModalOpen] = useState(false)
  const [isAddNewRecordModalOpen, setAddNewRecordModalOpen] = useState(false)

  const [scheduleList, setScheduleList] = useState([
    {
      id: 1,
      type: ScheduleType.Flight,
      filtered: true,
      from: {
        name: 'London',
      },
      to: {
        name: 'Paris',
      },
    },
    { id: 2, type: ScheduleType.Hotel, filtered: false },
    {
      id: 3,
      type: ScheduleType.Flight,
      filtered: true,
      from: {
        name: 'Paris',
      },
      to: {
        name: 'London',
      },
    },
  ])

  const renderIcon = (type) => {
    switch (type) {
      case ScheduleType.Flight:
        return (
          <Image
            width="15"
            height="15"
            src="/img/travel/flight-icon.svg"
            alt="flight-icon"
          />
        )
      case ScheduleType.Hotel:
        return (
          <Image
            width="15"
            height="15"
            src="/img/travel/hotel-icon.svg"
            alt="hotel-icon"
          />
        )
      default:
        return <div />
    }
  }

  const handleEditBtnClick = () => {
    console.log('cicked')
  }
  const handleAddNewRecord = () => {
    setAddNewRecordModalOpen(true)
  }

  return (
    <div>
      <div className="px-4 py-2 flex items-center justify-between">
        <div className="">Day 1</div>
        <div className="flex items-center space-x-2">
          <span>Total Expense</span>
          <button
            onClick={() => setExpenseRecordModalOpen(true)}
            className="rounded-full px-2 py-1 border border-gray-700"
            type="button"
          >
            $27000
          </button>
        </div>
      </div>
      <div className="bg-gray-100 pl-4 pr-2 py-4 flex">
        <div className="relative">
          <div className="rounded-full bg-gray-500 w-[10px] h-[10px] absolute top-0 left-0 transform -translate-x-1/2"></div>
          <div className="w-[1px] h-full bg-gray-500 mr-4"></div>
          <div className="rounded-full bg-gray-500 w-[10px] h-[10px] absolute bottom-0 left-0 transform -translate-x-1/2"></div>
        </div>
        <div className="flex-1">
          <ReactSortable list={scheduleList} setList={setScheduleList}>
            {scheduleList.map(({ id, type, from, to }, index) => (
              <div>
                <p className="mb-2 text-sm">Day {index + 1}</p>
                <div className="mb-4 relative" key={id}>
                  <div className="absolute z-50 border-gray-100 border-y-2 left-0 top-1/2 transform -translate-y-1/2 -translate-x-6">
                    {renderIcon(type)}
                  </div>
                  <ScheduleCard
                    from={from}
                    to={to}
                    type={type}
                    onEditBtnClick={() => handleEditBtnClick()}
                  />
                </div>
              </div>
            ))}
          </ReactSortable>
        </div>
      </div>
      <ExpenseRecordModal
        isExpenseRecordModalOpen={isExpenseRecordModalOpen}
        setExpenseRecordModalOpen={setExpenseRecordModalOpen}
        handleAddNewRecord={handleAddNewRecord}
      />
      <AddNewRecordModal
        setAddNewRecordModalOpen={setAddNewRecordModalOpen}
        isAddNewRecordModalOpen={isAddNewRecordModalOpen}
      />
    </div>
  )
}

export default Schedule
