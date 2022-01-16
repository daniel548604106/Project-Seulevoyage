import React from 'react';

import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';

const Explore = () => {
  return (
    <div>
      <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)}>
        <IonSegmentButton value="friends">
          <IonLabel>Friends</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="enemies">
          <IonLabel>Enemies</IonLabel>
        </IonSegmentButton>
      </IonSegment>
    </div>
  );
};

export default Explore;
