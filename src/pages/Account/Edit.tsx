import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';

import Navigation from '@/modules/Navigation/index.tsx';
import {
    IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar
} from '@ionic/react';

import Birth from './components/Birth.tsx';
import Email from './components/Email.tsx';
import Name from './components/Name.tsx';

const Edit = () => {
  const params = useParams<{ type: string }>();
  const renderComponents = useCallback(() => {
    switch (params.type) {
      case 'name':
        return <Name />;
        break;
      case 'email':
        return <Email />;
        break;
      case 'birth':
        return <Birth />;
        break;
      default:
    }
  }, [params.type]);
  return (
    <IonPage>
      <IonHeader>
        <Navigation title={params.type} />
      </IonHeader>
      <IonContent className="ion-padding">{renderComponents()}</IonContent>
    </IonPage>
  );
};

export default Edit;
