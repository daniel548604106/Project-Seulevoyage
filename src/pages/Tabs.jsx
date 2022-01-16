import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { cog, flash, list } from 'ionicons/icons';
import routes from '../routes/index.jsx';

const allTabs = [
  {
    icon: '/img/tabs/home.svg',
    label: 'Home',
    href: '/tabs/home',
    tab: 'home',
  },
  {
    icon: '/img/tabs/explore.svg',
    label: 'Explore',
    href: '/tabs/explore',
    tab: 'explore',
  },
  {
    icon: '/img/tabs/travel.svg',
    label: 'Travel',
    href: '/tabs/travel',
    tab: 'travel',
  },
  {
    icon: '/img/tabs/gallery.svg',
    label: 'Gallery',
    href: '/tabs/gallery',
    tab: 'gallery',
  },
  {
    icon: '/img/tabs/account.svg',
    label: 'Account',
    href: '/tabs/account',
    tab: 'account',
  },
];

const Tabs = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        {routes.map(({ path, component, exact }) => (
          <Route key={path} path={path} component={component} exact={exact} />
        ))}
        <Route path="/tabs" render={() => <Redirect to="/tabs/feed" />} exact={true} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        {allTabs.map(({ href, label, icon, tab }) => (
          <IonTabButton key={label} tab={tab} href={href}>
            <IonIcon icon={icon} />
            <IonLabel>{label}</IonLabel>
          </IonTabButton>
        ))}
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
