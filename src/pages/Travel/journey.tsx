import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import IonCustomContent from '@/modules/IonCustomContent';
import Navigation from '@/modules/Navigation';
import { IonContent, IonPage } from '@ionic/react';

import Hotel from './components/Tabs/Hotel';
import Map from './components/Tabs/Map';
import Schedule from './components/Tabs/Schedule';

enum Tabs {
  'Schedule',
  'Map',
  'Hotel',
}

const TabSwitch = (activeTab) => {
  switch (activeTab) {
    case Tabs.Schedule:
      return <Schedule />
    case Tabs.Map:
      return <Map />
    case Tabs.Hotel:
      return <Hotel />
    default:
      return <div />
  }
}

const Journey = () => {
  const [activeTab, setActiveTab] = useState(Tabs.Schedule)

  // useEffect(() => {
  //   axios.get(`${process.env.GOOGLE_TRAVEL_API}/`)
  // }, [])
  return (
    <IonPage>
      <IonContent>
        <div className="relative overflow-y-scroll">
          <div className="absolute top-0 left-0 right-0 bg-transparent">
            <Navigation customStyle="bg-transparent" title="My Journey" />
          </div>
          <div
            style={{
              backgroundImage: `url(
                'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2346&q=80'
              )`,
            }}
            className="pb-[100%] bg-cover w-screen"
          ></div>
          <div className="absolute bottom-6 left-5 space-y-1 text-white">
            <h2 className="font-semibold text-2xl">Romantic Paris</h2>
            <p>2020/12/18-18/23( 5 days)</p>
            <div className="flex items-center space-x-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <Image
                  width="35"
                  height="35"
                  src={`/img/users/user-${index + 1}.png`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="sticky top-[50px]">
          <ul className="flex items-center justify-between  mx-5 py-2">
            <li onClick={() => setActiveTab(Tabs.Schedule)}>
              <Image
                width="20"
                height="20"
                src="/img/travel/schedule.svg"
                alt="schedule"
              />{' '}
            </li>
            <li onClick={() => setActiveTab(Tabs.Map)}>
              <Image
                width="20"
                height="20"
                src="/img/travel/map-marker.svg"
                alt="marker"
              />{' '}
            </li>
            <li onClick={() => setActiveTab(Tabs.Hotel)}>
              <Image
                width="20"
                height="20"
                src="/img/travel/hotel.svg"
                alt="hotel"
              />{' '}
            </li>
          </ul>
          {TabSwitch(activeTab)}
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Journey
