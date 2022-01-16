import Image from 'next/image';
import React from 'react';

import { setSettings } from '@/redux/actions';
import Store from '@/redux/index';
import * as selectors from '@/redux/selectors';
import {
    IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToggle, IonToolbar
} from '@ionic/react';

const Settings = () => {
  const settings = Store.useState(selectors.getSettings);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="p-3">
          <div className="flex items-center border-b space-x-4 py-4">
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
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
