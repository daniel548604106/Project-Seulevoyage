import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import IonCustomContent from '@/modules/IonCustomContent'
import Navigation from '@/modules/Navigation'
import { IonContent, IonPage } from '@ionic/react'

import Hotel from './components/Tabs/Hotel'
import Map from './components/Tabs/Map'
import Schedule from './components/Tabs/Schedule'

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

const tabs = [
  {
    tabName: Tabs.Schedule,
    src: '/img/travel/schedule.svg',
    alt: 'schedule',
  },
  { tabName: Tabs.Map, src: '/img/travel/map-marker.svg', alt: 'map' },
  { tabName: Tabs.Hotel, src: '/img/travel/hotel.svg', alt: 'hotel' },
]

const Journey = () => {
  const [activeTab, setActiveTab] = useState(Tabs.Schedule)

  const history = useHistory()
  // useEffect(() => {
  //   axios.get(`${process.env.GOOGLE_TRAVEL_API}/`)
  // }, [])
  return (
    <IonPage>
      <IonContent>
        <div className="relative overflow-y-scroll">
          <div className="absolute left-0 right-0 top-0 bg-transparent">
            <Navigation
              customStyle="bg-transparent text-white"
              leftIcon={{ onClick: () => history.push('/tabs/travel') }}
              title="My Journey"
            />
          </div>
          <div
            style={{
              backgroundImage: `url(
                'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2346&q=80'
              )`,
            }}
            className="pb-[100%] w-screen bg-cover"
          ></div>
          <div className="absolute bottom-6 left-5 text-white space-y-1">
            <h2 className="text-2xl font-semibold">Romantic Paris</h2>
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
        <div className="top-[50px] sticky">
          <ul className="flex items-center justify-between mx-5 px-6 py-3">
            {tabs.map(({ tabName, src, alt }) => (
              <li className="text-black" onClick={() => setActiveTab(tabName)}>
                <Image width="20" height="20" src={src} alt={alt} />
              </li>
            ))}
          </ul>
          {TabSwitch(activeTab)}
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Journey
