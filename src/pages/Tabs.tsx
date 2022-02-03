import { matchPath } from 'react-router';
import { Redirect, Route } from 'react-router-dom';

import { useAppSelector } from '@/hooks/redux';
import routes from '@/routes/index';
import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import style from './tabs.module.scss';

const tabRoutes = [
  {
    icon: '/img/tabs/home.svg',
    label: 'Home',
    href: '/',
    tab: 'home',
    requiresAuth: false,
  },
  {
    icon: '/img/tabs/explore.svg',
    label: 'Explore',
    href: '/explore',
    tab: 'explore',
    requiresAuth: false,
  },
  {
    icon: '/img/tabs/travel.svg',
    label: 'Travel',
    href: '/travel',
    tab: 'travel',
    requiresAuth: true,
  },
  {
    icon: '/img/tabs/gallery.svg',
    label: 'Gallery',
    href: '/gallery',
    tab: 'gallery',
    requiresAuth: true,
  },
  {
    icon: '/img/tabs/account.svg',
    label: 'Account',
    href: '/account',
    tab: 'account',
    requiresAuth: true,
  },
]

const Tabs = () => {
  const isLoggedIn = useAppSelector((state) => state.common.isLoggedIn)
  return (
    <IonTabs className={style['tabs-root']}>
      <IonRouterOutlet>
        {routes.map(({ path, component, exact }) => (
          <Route key={path} path={path} component={component} exact={exact} />
        ))}
      </IonRouterOutlet>
      <IonTabBar className={`${style['tabs-bar']} `} slot="bottom">
        {tabRoutes.map(({ href, label, icon, tab, requiresAuth }) => (
          <IonTabButton
            className={style['tabs-bar__button']}
            key={label}
            tab={tab}
            href={requiresAuth && !isLoggedIn ? '/login' : href}
          >
            <IonIcon className={style['tabs-bar__button__icon']} icon={icon} />
            <IonLabel className={style['tabs-bar__button__label']}>
              {label}
            </IonLabel>
          </IonTabButton>
        ))}
      </IonTabBar>
    </IonTabs>
  )
}

export default Tabs
