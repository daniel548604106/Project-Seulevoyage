import Account from '@/pages/Account/index';
import Home from '@/pages/Feed.jsx';
import ListDetail from '@/pages/ListDetail.jsx';
import List from '@/pages/Lists.jsx';
import Login from '@/pages/Login/index';

const routes = [
  { path: '/tabs/home', component: Home, exact: true },
  {
    path: '/tabs/explore',
    component: List,
    exact: true,
  },
  {
    path: '/tabs/lists/:listId',
    component: ListDetail,
    exact: true,
  },
  {
    path: '/tabs/account',
    component: Account,
    exact: true,
  },
  {
    path: '/login',
    component: Login,
    exact: true,
  },
]

export default routes
