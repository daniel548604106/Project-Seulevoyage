import { caretDownOutline } from 'ionicons/icons';
import Button from 'modules/Button/index.tsx';
import IonCustomContent from 'modules/IonCustomContent/index.tsx';
import Navigation from 'modules/Navigation/index.tsx';
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';

import {
    IonButton, IonContent, IonFab, IonHeader, IonLabel, IonModal, IonPage, IonSegment,
    IonSegmentButton
} from '@ionic/react';

import Date from './components/Date.tsx';
import Destination from './components/Destination.tsx';
import JourneySetting from './components/JourneySetting.tsx';

interface ModalHeaderProps {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  setCreateModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

enum CreationSteps {
  'Destination',
  'Date',
  'Setting',
}

const ModalHeader = (props: ModalHeaderProps) => {
  const { currentStep, setCurrentStep, setCreateModalOpen } = props;

  const renderTitle = () => {
    switch (currentStep) {
      case CreationSteps.Destination:
        return 'Destination';
        break;
      case CreationSteps.Date:
        return 'Select Date';
        break;
      case CreationSteps.Setting:
        return 'Journey Setting';
        break;
      default:
        return '';
    }
  };
  return (
    <div className="flex items-center justify-between p-5">
      <Image
        width="24"
        height="24"
        onClick={() =>
          currentStep === 0 ? setCreateModalOpen(false) : setCurrentStep(currentStep - 1)
        }
        src={currentStep === 0 ? '/img/close.svg' : '/img/back.svg'}
        alt="close"
      />
      <h2>{renderTitle()}</h2>
      {currentStep === 0 ? (
        <span onClick={() => setCurrentStep(currentStep + 1)}>Skip</span>
      ) : (
        <span></span>
      )}
    </div>
  );
};

const Travel = () => {
  const [selectedSegment, setSelectedSegment] = useState('future');
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [creationStep, setCreationStep] = useState(0);

  const handleModalButtonClick = () => {
    creationStep === CreationSteps.Setting
      ? console.log('create new')
      : setCreationStep(creationStep + 1);
  };
  const renderModalContent = useCallback(() => {
    switch (creationStep) {
      case CreationSteps.Destination:
        return <Destination />;
        break;
      case CreationSteps.Date:
        return <Date />;
        break;
      case CreationSteps.Setting:
        return <JourneySetting />;
        break;
      default:
    }
  }, [creationStep]);

  useEffect(() => {
    !isCreateModalOpen && setCreationStep(0);
  }, [isCreateModalOpen]);

  return (
    <IonPage>
      <IonHeader>
        <Navigation title="Travel" />
      </IonHeader>
      <IonCustomContent className="relative">
        <div className="h-full flex flex-col">
          <IonSegment value={selectedSegment} onIonChange={e => setSelectedSegment(e.detail.value)}>
            <IonSegmentButton value="future">
              <IonLabel>Ongoing/Future</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="past">
              <IonLabel>Past Journey</IonLabel>
            </IonSegmentButton>
          </IonSegment>
          <div className="flex flex-1 flex-col items-center justify-center space-y-4">
            <Image width="200" height="185" src="/img/travel/no-trip.svg" alt="port" />
            <p className="text-normal font-semibold">
              You do not have any journey on the list yet!
            </p>
            <p className="text-sm text-gray-500">Start your journey </p>
            <Image width="15" height="15" src={caretDownOutline} alt="down" />
          </div>
        </div>
        <div className="absolute bottom-10 right-0 left-0 mx-5">
          <Button onClick={() => setCreateModalOpen(true)} text="Create My Journey" />
        </div>
      </IonCustomContent>
      <IonModal
        onDidDismiss={() => setCreateModalOpen(false)}
        isOpen={isCreateModalOpen}
        swipeToClose={true}
      >
        <div className="relative">
          <ModalHeader
            currentStep={creationStep}
            setCreateModalOpen={setCreateModalOpen}
            setCurrentStep={setCreationStep}
          />
          {renderModalContent()}
        </div>
        <div className="absolute bottom-10 right-0 left-0 mx-5">
          <Button
            onClick={() => handleModalButtonClick()}
            text={creationStep === CreationSteps.Setting ? 'Complete' : 'Next step'}
          />
        </div>
      </IonModal>
    </IonPage>
  );
};

export default Travel;
