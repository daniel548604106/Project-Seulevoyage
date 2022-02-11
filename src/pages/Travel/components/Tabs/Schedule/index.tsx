import Image from 'next/image'
import React, { useState } from 'react'
import { ReactSortable } from 'react-sortablejs'

import AddNewRecordModal from './AddNewRecordModal'
import ExpenseRecordModal from './ExpenseRecordModal'
import ScheduleCard from './ScheduleCard'

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
      <div className="flex items-center justify-between px-4 py-2">
        <div className="">Day 1</div>
        <div className="flex items-center space-x-2">
          <span>Total Expense</span>
          <button
            onClick={() => setExpenseRecordModalOpen(true)}
            className="px-2 py-1 border border-gray-700 rounded-full"
            type="button"
          >
            $27000
          </button>
        </div>
      </div>
      <div className="flex pl-4 pr-2 py-4 bg-gray-100">
        <div className="relative">
          <div className="w-[10px] h-[10px] absolute left-0 top-0 bg-gray-500 rounded-full transform -translate-x-1/2"></div>
          <div className="w-[1px] mr-4 h-full bg-gray-500"></div>
          <div className="w-[10px] h-[10px] absolute bottom-0 left-0 bg-gray-500 rounded-full transform -translate-x-1/2"></div>
        </div>
        <div className="flex-1">
          <ReactSortable list={scheduleList} setList={setScheduleList}>
            {scheduleList.map(({ id, type, from, to }, index) => (
              <div>
                <p className="mb-2 text-sm">Day {index + 1}</p>
                <div className="relative mb-4" key={id}>
                  <div className="border-y-2 absolute z-50 left-0 top-1/2 border-gray-100 transform -translate-x-6 -translate-y-1/2">
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
