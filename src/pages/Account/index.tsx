import { calendarOutline, mailOutline } from 'ionicons/icons'
import AccountInfo from 'modules/AccountInfo'
import IonCustomContent from 'modules/IonCustomContent'
import Image from 'next/image'
import React from 'react'
import { useHistory } from 'react-router-dom'

import { setSettings } from '@/redux/actions'
import Store from '@/redux/index'
import * as selectors from '@/redux/selectors'
import {
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToggle,
  IonToolbar,
} from '@ionic/react'

const personalInfos = [
  {
    title: 'Full Name',
    content: 'Daniel',
    required: true,
    href: 'name',
  },
  {
    title: 'Email',
    content: 'daniel548604106@gmail.com',
    required: true,
    href: 'email',
    icon: mailOutline,
  },
  {
    title: 'Date of birth',
    content: '1997/04/10',
    required: true,
    href: 'birth',
    icon: calendarOutline,
  },
  {
    title: 'Gender',
    content: 'Unfilled',
    required: true,
    href: 'gender',
  },
]
const Settings = () => {
  const history = useHistory()
  const settings = Store.useState(selectors.getSettings)

  const onHandleInfoClick = (href) => {
    history.push(`/tabs/account/edit/${href}`)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonCustomContent>
        <div>
          <div className="flex items-center py-4 border-b space-x-4">
            <Image
              className="rounded-full"
              width="80"
              height="80"
              src="https://images.unsplash.com/photo-1642286312932-229b44068631?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80"
              alt="image"
            />
            <div>
              <h2 className="mb-1 text-xl font-bold">Daniel</h2>
              <p>daniel548604106@gmail.com</p>
            </div>
          </div>
          <div>
            {personalInfos.map(({ title, content, required, icon, href }) => (
              <div key={title} className="my-3">
                <AccountInfo
                  onClick={() => onHandleInfoClick(href)}
                  required
                  title={title}
                  content={content}
                  icon={icon || ''}
                />
              </div>
            ))}
          </div>
        </div>
      </IonCustomContent>
    </IonPage>
  )
}

export default Settings
