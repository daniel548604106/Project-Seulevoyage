import Home from '@/pages/Feed.jsx';
import Account from '@/pages/Account/index.tsx';
import ListDetail from '@/pages/ListDetail.jsx';
import List from '@/pages/Lists.jsx';

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
];

export default routes;
