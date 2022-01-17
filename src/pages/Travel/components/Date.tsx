import React, { useState } from 'react';

import IonCustomContent from '@/modules/IonCustomContent';
import { IonButton, IonButtons, IonDatetime } from '@ionic/react';

const Date = () => {
  const confirm = () => console.log('ihi')
  const reset = () => console.log('ihi')
  const [selectedDate, setSelectedDate] = useState('2012-12-15T13:47:20.789')

  return (
    <IonCustomContent>
      <div className=" h-full">
        danie
        <IonDatetime
          value={selectedDate}
          onIonChange={(e) => setSelectedDate(e.detail.value!)}
        ></IonDatetime>
        <IonDatetime
          min="1994-03-14"
          max="2012-12-09"
          value="2008-09-02"
        ></IonDatetime>
        <IonDatetime>
          <IonButtons slot="buttons">
            <IonButton onClick={() => confirm()}>Good to go!</IonButton>
            <IonButton onClick={() => reset()}>Reset</IonButton>
          </IonButtons>
        </IonDatetime>
      </div>
    </IonCustomContent>
  )
}

export default Date
