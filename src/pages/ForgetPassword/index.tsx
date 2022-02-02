import Image from 'next/image';
import React from 'react';

import Button from '@/modules/Button';
import IonCustomContent from '@/modules/IonCustomContent';
import { IonHeader, IonPage } from '@ionic/react';

const ForgetPassword = () => {
  return (
    <IonPage>
      <IonHeader>ForgetPassword</IonHeader>
      <IonCustomContent>
        <div className="flex flex-col items-center">
          <Image
            width="100"
            height="100"
            src="/img/login/logo-full.svg"
            alt="logo"
          />
          <p className="mt-10">
            Enter your email for the verification proccess, and we will send 4
            digits code to your email for the verification.
          </p>
          <label className="mt-14 text-left w-full" htmlFor="email">
            Email
          </label>
          <input
            className="px-4 w-full bg-white py-4 mt-4 outline-none rounded-lg"
            type="email"
            placeholder="Enter your email"
          />
          <div className="w-full mt-6">
            <Button onClick={() => console.log('clicked')} text="Continue" />
          </div>
        </div>
      </IonCustomContent>
    </IonPage>
  )
}

export default ForgetPassword
