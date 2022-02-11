import IonCustomContent from 'modules/IonCustomContent'
import Image from 'next/image'
import React, { useState } from 'react'

import { IonToggle } from '@ionic/react'

const JourneySetting = () => {
  const [isSharingChecked, setSharingChecked] = useState(true)
  const [isEditChecked, setEditChecked] = useState(true)
  const [profileImage, setProfileImage] = useState<File | null>(null)
  return (
    <IonCustomContent>
      <div className="pb-c-100">
        <h2 className="mb-5 text-lg font-semibold">Journey Profile</h2>
        <div className="relative mb-5 pb-c-47% w-full">
          <label htmlFor="upload">
            <div className="absolute z-10 left-1/2 top-1/2 flex flex-col justify-center transform -translate-x-1/2 -translate-y-1/2">
              <Image
                width="28"
                height="28"
                src="/img/add-img.svg"
                alt="add-img"
              />
              <p className="mt-2 text-white text-xs">
                Customize Profile Picture
              </p>
            </div>
            <input
              onChange={(e) => setProfileImage(e.target.files[0])}
              type="file"
              id="upload"
              className="hidden"
            />
            <Image
              objectFit="cover"
              className="rounded-lg"
              layout="fill"
              src={`${
                profileImage
                  ? URL.createObjectURL(profileImage)
                  : 'https://images.unsplash.com/photo-1642372133020-4010b03d6de9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
              } `}
              alt="place"
            />
          </label>
        </div>
        <h3 className="text-normal mb-2 font-semibold">Journey Name</h3>
        <input
          className="mb-2 px-4 py-2 w-full bg-gray-100 rounded-lg outline-none"
          placeholder="Name of journey"
        />
        <h3 className="text-normal mb-2 font-semibold">Date</h3>
        <div className="flex items-center justify-between mb-4 text-gray-600 text-sm font-semibold">
          <span>2020/12/18 - 2020/12/23</span>
          <button type="button" className="flex items-center text-green">
            <span className="mr-1">Edit</span>
            <Image width="18" height="18" src="/img/edit.svg" alt="edit" />
          </button>
        </div>
        <h3 className="text-normal mb-2 font-semibold">Sharing Setting</h3>
        <div className="flex items-center py-3 text-gray-500 text-sm">
          <IonToggle
            color="danger"
            checked={isSharingChecked}
            onIonChange={(e) => setSharingChecked(e.detail.checked)}
          />
          <p className="ml-5">The contents are available for all users</p>
        </div>
        <h3 className="text-normal mb-2 font-semibold">Edit Setting</h3>
        <div className="flex items-center py-3 text-gray-500 text-sm">
          <IonToggle
            color="danger"
            checked={isEditChecked}
            onIonChange={(e) => setEditChecked(e.detail.checked)}
          />
          <p className="ml-5">Your buddies can also edit the content</p>
        </div>
        <h3 className="text-normal mb-2 font-semibold">Participants</h3>
        <Image width="40" height="40" src="/img/invite.svg" alt="invite" />
      </div>
    </IonCustomContent>
  )
}

export default JourneySetting
