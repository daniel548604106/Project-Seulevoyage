import { Redirect, Route } from 'react-router-dom';

import OnBoarding from '@/components/Onboarding/Index';
import { StatusBar, Style } from '@capacitor/status-bar';
import { IonApp, IonLoading, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { useAppSelector } from './hooks/redux';
import Menu from './Menu';
import Tabs from './pages/Tabs';

// window.matchMedia("(prefers-color-scheme: dark)").addListener(async (status) => {
//   try {
//     await StatusBar.setStyle({
//       style: status.matches ? Style.Dark : Style.Light,
//     });
//   } catch {}
// });

const AppShell = () => {
  const isLoading = useAppSelector((state) => state.common.isLoading)
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <OnBoarding />
          <IonLoading isOpen={isLoading} spinner="circular" />
          <IonRouterOutlet id="main">
            <Route path="/" render={() => <Tabs />} />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  )
}

export default AppShell
