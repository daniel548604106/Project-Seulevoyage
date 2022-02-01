import React from 'react';

const Schedule = () => {
  return (
    <div>
      {' '}
      <div className="flex items-center justify-between">
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
    </div>
  )
}

export default Schedule
