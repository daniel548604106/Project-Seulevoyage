import React from 'react';

import IonCustomContent from '@/modules/IonCustomContent';
import { IonPage } from '@ionic/react';

const Login = () => {
  return (
    <IonPage>
      <IonCustomContent>
        <div className="text-2xl font-semibold">
          Welcome,
          <br /> Log in to continue!
        </div>
      </IonCustomContent>
    </IonPage>
  )
}

export default Login
