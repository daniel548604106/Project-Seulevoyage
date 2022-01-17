import IonCustomContent from 'modules/IonCustomContent';
import Image from 'next/image';
import React, { useState } from 'react';

import { IonToggle } from '@ionic/react';

const JourneySetting = () => {
  const [isSharingChecked, setSharingChecked] = useState(true)
  const [isEditChecked, setEditChecked] = useState(true)
  const [profileImage, setProfileImage] = useState<File | null>(null)
  return (
    <IonCustomContent>
      <div className="pb-c-100">
        <h2 className="text-lg font-semibold mb-5">Journey Profile</h2>
        <div className="w-full pb-c-47% mb-5 relative">
          <label htmlFor="upload">
            <div className="absolute left-1/2 top-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center">
              <Image
                width="28"
                height="28"
                src="/img/add-img.svg"
                alt="add-img"
              />
              <p className="text-xs text-white mt-2">
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
        <h3 className="text-normal font-semibold mb-2 ">Journey Name</h3>
        <input
          className="px-4 py-2 w-full mb-2 rounded-lg outline-none bg-gray-100"
          placeholder="Name of journey"
        />
        <h3 className="text-normal font-semibold mb-2">Date</h3>
        <div className="flex items-center justify-between mb-4 text-sm font-semibold text-gray-600">
          <span>2020/12/18 - 2020/12/23</span>
          <button type="button" className="flex items-center text-green">
            <span className="mr-1">Edit</span>
            <Image width="18" height="18" src="/img/edit.svg" alt="edit" />
          </button>
        </div>
        <h3 className="text-normal font-semibold mb-2">Sharing Setting</h3>
        <div className="flex items-center py-3 text-sm text-gray-500">
          <IonToggle
            color="danger"
            checked={isSharingChecked}
            onIonChange={(e) => setSharingChecked(e.detail.checked)}
          />
          <p className="ml-5">The contents are available for all users</p>
        </div>
        <h3 className="text-normal font-semibold mb-2">Edit Setting</h3>
        <div className="flex items-center py-3 text-sm text-gray-500">
          <IonToggle
            color="danger"
            checked={isEditChecked}
            onIonChange={(e) => setEditChecked(e.detail.checked)}
          />
          <p className="ml-5">Your buddies can also edit the content</p>
        </div>
        <h3 className="text-normal font-semibold mb-2">Participants</h3>
        <Image width="40" height="40" src="/img/invite.svg" alt="invite" />
      </div>
    </IonCustomContent>
  )
}

export default JourneySetting
