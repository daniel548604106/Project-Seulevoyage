import Image from 'next/image'
import Card from '../ui/Card'

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
  IonMenuButton,
} from '@ionic/react'
import Notifications from './Notifications'
import { useState } from 'react'
import { notificationsOutline } from 'ionicons/icons'
import { getHomeItems } from '../redux/selectors'
import Store from '../redux'

const FeedCard = ({ title, type, text, author, authorAvatar, image }) => (
  <Card className="mx-auto my-4">
    <div className="relative w-full h-32">
      <Image
        className="rounded-t-xl"
        objectFit="cover"
        src={image}
        alt=""
        layout="fill"
      />
    </div>
    <div className="px-4 py-4 dark:bg-gray-900 bg-white rounded-b-xl">
      <h4 className="text-s py-0 text-gray-400 dark:text-gray-500 font-bold uppercase">
        {type}
      </h4>
      <h2 className="dark:text-gray-100 text-gray-800 text-2xl font-bold">
        {title}
      </h2>
      <p className="text-s mr-1 my-3 dark:text-gray-400 text-gray-500 sm:text-sm">
        {text}
      </p>
      <div className="flex items-center space-x-4">
        <div className="relative w-10 h-10">
          <Image
            layout="fill"
            src={authorAvatar}
            className="rounded-full"
            alt=""
          />
        </div>
        <h3 className="m-l-8 dark:text-gray-200 text-gray-500 text-sm font-medium">
          {author}
        </h3>
      </div>
    </div>
  </Card>
)

const Feed = () => {
  const homeItems = Store.useState(getHomeItems)
  const [showNotifications, setShowNotifications] = useState(false)

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Feed</IonTitle>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonButtons slot="end">
            <IonButton onClick={() => setShowNotifications(true)}>
              <IonIcon icon={notificationsOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Feed</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Notifications
          open={showNotifications}
          onDidDismiss={() => setShowNotifications(false)}
        />
        {homeItems.map((i, index) => (
          <FeedCard {...i} key={index} />
        ))}
      </IonContent>
    </IonPage>
  )
}

export default Feed
