import { add } from 'ionicons/icons'
import { useEffect, useRef, useState } from 'react'
import { Route } from 'react-router-dom'

import OnBoarding from '@/components/Onboarding/Index'
import {
  IonApp,
  IonFab,
  IonFabButton,
  IonIcon,
  IonLoading,
  IonRouterOutlet,
  IonSplitPane,
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'

import { useAppSelector } from './hooks/redux'
import Menu from './Menu'
import Tabs from './pages/Tabs'

// window.matchMedia("(prefers-color-scheme: dark)").addListener(async (status) => {
//   try {
//     await StatusBar.setStyle({
//       style: status.matches ? Style.Dark : Style.Light,
//     });
//   } catch {}
// });

const AppShell = () => {
  const isLoading = useAppSelector((state) => state.common.isLoading)
  const installBtnRef = useRef(null)
  const [isInstallPromotionVisible, setPromotionVisible] = useState(false)

  useEffect(() => {
    // Initialize deferredPrompt for use later to show browser install prompt.
    let deferredPrompt

    window.addEventListener('appinstalled', () => {
      // Hide the app-provided install promotion
      setPromotionVisible(false)
      // Clear the deferredPrompt so it can be garbage collected
      deferredPrompt = null
      // Optionally, send analytics event to indicate successful install
      console.log('PWA was installed')
    })

    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault()
      // Stash the event so it can be triggered later.
      deferredPrompt = e
      console.log(deferredPrompt, 'deferredPrompt')
      // Update UI notify the user they can install the PWA
      setPromotionVisible(true)
      // Optionally, send analytics event that PWA install promo was shown.
      console.log(`'beforeinstallprompt' event was fired.`)
    })

    installBtnRef?.current?.addEventListener('click', async () => {
      // Hide the app provided install promotion
      // Show the install prompt

      console.log('clicked')

      if (deferredPrompt) {
        console.log('here')
        deferredPrompt?.prompt()
        // Wait for the user to respond to the prompt
        const { outcome } = await deferredPrompt?.userChoice
        console.log(outcome, 'outcome')
        setPromotionVisible(false)

        // Optionally, send analytics event with outcome of user choice
        console.log(`User response to the install prompt: ${outcome}`)
        // We've used the prompt, and can't use it again, throw it away
        deferredPrompt = null
      }
    })
    ;[]
  })
  return (
    <IonApp>
      <IonFab vertical="top" horizontal="end" slot="fixed">
        {isInstallPromotionVisible && (
          <IonFabButton ref={installBtnRef}>
            <IonIcon icon={add} />
          </IonFabButton>
        )}
      </IonFab>
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
