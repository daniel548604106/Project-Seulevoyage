import IonCustomContent from 'modules/IonCustomContent/index.tsx';
import Navigation from 'modules/Navigation/index.tsx';
import Image from 'next/image';
import React, { useState } from 'react';

import {
    IonButton, IonContent, IonHeader, IonLabel, IonPage, IonSegment, IonSegmentButton
} from '@ionic/react';

const Travel = () => {
  const [selectedSegment, setSelectedSegment] = useState('future');
  return (
    <IonPage>
      <IonHeader>
        <Navigation title="Travel" />
      </IonHeader>
      <IonCustomContent>
        <IonSegment value={selectedSegment} onIonChange={e => setSelectedSegment(e.detail.value)}>
          <IonSegmentButton value="future">
            <IonLabel>Ongoing/Future</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="past">
            <IonLabel>Past Journey</IonLabel>
          </IonSegmentButton>
        </IonSegment>
        <div className="h-auto flex flex-col items-center justify-center space-y-4">
          <Image width="200" height="185" src="/img/travel/no-trip.svg" alt="port" />
          <p className="text-normal font-semibold">You do not have any journey on the list yet!</p>
          <p className="text-sm text-gray-500">Start your journey </p>
        </div>
        <IonButton expand="full" fill="outline">
          Outline + Full
        </IonButton>
      </IonCustomContent>
    </IonPage>
  );
};

export default Travel;
