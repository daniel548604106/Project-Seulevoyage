import React from 'react';

import { IonContent } from '@ionic/react';

interface IonCustomContentProps {
  children: JSX.Element;
}
const IonCustomContent = (props: IonCustomContentProps) => {
  const { children } = props;
  return <IonContent className="ion-padding">{children}</IonContent>;
};

export default IonCustomContent;
