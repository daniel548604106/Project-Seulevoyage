import React from 'react';

import { IonContent } from '@ionic/react';

interface IonCustomContentProps {
  children: JSX.Element;
  className?: string;
}
const IonCustomContent = (props: IonCustomContentProps) => {
  const { children, className } = props;
  return <IonContent className={`${className} ion-padding`}>{children}</IonContent>;
};

export default IonCustomContent;
