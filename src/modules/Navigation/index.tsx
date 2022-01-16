import React from 'react';

import { IonBackButton, IonButtons, IonTitle, IonToolbar } from '@ionic/react';

interface NavigationProps {
  title: string;
  icon?: string;
}
const Navigation = (props: NavigationProps) => {
  const { title } = props;
  return (
    <IonToolbar>
      <IonButtons slot="start">
        <IonBackButton icon="/img/back.svg" text={null} />
      </IonButtons>
      <IonTitle>{title}</IonTitle>
    </IonToolbar>
  );
};

export default Navigation;
