import { Redirect, Route } from 'react-router-dom'
import {
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import routes from '@/routes/index.jsx'
import style from './tabs.module.scss'
import { useSelector } from 'react-redux'
import { matchPath } from 'react-router'

const tabRoutes = [
  {
    icon: '/img/tabs/home.svg',
    label: 'Home',
    href: '/tabs/home',
    tab: 'home',
    requiresAuth: false,
  },
  {
    icon: '/img/tabs/explore.svg',
    label: 'Explore',
    href: '/tabs/explore',
    tab: 'explore',
    requiresAuth: false,
  },
  {
    icon: '/img/tabs/travel.svg',
    label: 'Travel',
    href: '/tabs/travel',
    tab: 'travel',
    requiresAuth: true,
  },
  {
    icon: '/img/tabs/gallery.svg',
    label: 'Gallery',
    href: '/tabs/gallery',
    tab: 'gallery',
    requiresAuth: true,
  },
  {
    icon: '/img/tabs/account.svg',
    label: 'Account',
    href: '/tabs/account',
    tab: 'account',
    requiresAuth: true,
  },
]

const Tabs = () => {
  const isLoggedIn = useSelector((state) => state.common.isLoggedIn)
  return (
    <IonTabs className={style['tabs-root']}>
      <IonRouterOutlet>
        {routes.map(({ path, component, exact }) => (
          <Route key={path} path={path} component={component} exact={exact} />
        ))}
        <Route
          path="/tabs"
          render={() => <Redirect to="/tabs/feed" />}
          exact={true}
        />
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
