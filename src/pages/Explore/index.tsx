import Image from 'next/image'
import React, { useState } from 'react'

import IonCustomContent from '@/modules/IonCustomContent'
import Navigation from '@/modules/Navigation'
import {
  IonHeader,
  IonLabel,
  IonPage,
  IonSegment,
  IonSegmentButton,
} from '@ionic/react'

const Explore = () => {
  const [activeTab, setActiveTab] = useState('discover')
  const renderTabComponent = () => {
    switch (activeTab) {
      case 'discover':
        return <div>discover</div>
      case 'following':
        return <div>folloinwg</div>
      default:
        return <div />
    }
  }
  return (
    <IonPage>
      <IonHeader>
        <Navigation
          leftIcon={{
            icon: '/img/menu.svg',
            onClick: () => console.log('clcked'),
          }}
          rightTools={
            <div className="flex items-center space-x-3">
              <button className="flex items-center">
                <Image
                  width="20"
                  height="20"
                  src="/img/notification.svg"
                  alt="notification"
                />
              </button>
              <button className="flex items-center">
                <Image
                  width="20"
                  height="20"
                  src="/img/search.svg"
                  alt="search"
                />
              </button>
            </div>
          }
          title="Explore"
        />
      </IonHeader>
      <IonCustomContent>
        <div>
          <IonSegment onIonChange={(e) => setActiveTab(e.detail.value)}>
            <IonSegmentButton value="discover">
              <IonLabel>Discover</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="following">
              <IonLabel>Following</IonLabel>
            </IonSegmentButton>
          </IonSegment>
          {renderTabComponent()}
        </div>
      </IonCustomContent>
    </IonPage>
  )
}

export default Explore
