import { settingsOutline } from 'ionicons/icons'
import Image from 'next/image'
import React, { Dispatch, SetStateAction } from 'react'

import Button from '@/modules/Button'
import Navigation from '@/modules/Navigation'
import { IonContent, IonIcon, IonModal } from '@ionic/react'

interface ExpenseRecordModalProps {
  isExpenseRecordModalOpen: boolean
  setExpenseRecordModalOpen: Dispatch<SetStateAction<boolean>>
  handleAddNewRecord: () => void
}

const ExpenseRecordModal = (props: ExpenseRecordModalProps) => {
  const {
    handleAddNewRecord,
    isExpenseRecordModalOpen,
    setExpenseRecordModalOpen,
  } = props
  props
  return (
    <div>
      <IonModal cssClass="flex flex-col" isOpen={isExpenseRecordModalOpen}>
        <IonContent>
          <div className="flex-1">
            <div
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFyaXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60')`,
              }}
              className="pb-[60%] relative w-full bg-cover"
            >
              <div className="absolute left-0 right-0 top-0">
                <Navigation
                  customStyle="bg-transparent text-white"
                  title="Expense"
                  leftIcon={{ onClick: () => setExpenseRecordModalOpen(false) }}
                  rightTools={
                    <div>
                      <IonIcon
                        className="w-[20px] h-[20px]"
                        src={settingsOutline}
                      />
                    </div>
                  }
                />
              </div>
              <div className="absolute left-1/2 top-1/2 w-full text-center text-white transform -translate-x-1/2 -translate-y-1/4 space-y-1">
                <h2 className="text-3xl font-bold">$27,000</h2>
                <p className="text-xl font-semibold">Romantic Paris</p>
                <div className="flex items-center justify-center text-xs space-x-5">
                  <p>4 people</p>
                  <p>Created Dec 2020</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between px-2 py-2">
              <button>Day 1</button>
              <button>Category</button>
              <div className="flex items-center text-xs space-x-1">
                <span>(You owe $2,700)</span>
                <p>
                  Total <span className="text-xl">$27,000</span>
                </p>
              </div>
            </div>
            <div className="fixed z-20 bottom-10 flex items-center justify-center px-2 py-2 w-screen bg-gray-200">
              <Button
                customStyle={{ width: '200px' }}
                onClick={() => handleAddNewRecord()}
                text="New Record"
              />
            </div>
          </div>
        </IonContent>
      </IonModal>
    </div>
  )
}

export default ExpenseRecordModal
