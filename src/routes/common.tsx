import Account from '@/pages/Account/index'
import Home from '@/pages/Feed.jsx'
import ForgetPassword from '@/pages/ForgetPassword'
import ListDetail from '@/pages/ListDetail.jsx'
import List from '@/pages/Lists.jsx'
import Login from '@/pages/Login/index'
import Signup from '@/pages/Signup/index'

const routes = [
  { path: '/', component: Home, exact: true },
  {
    path: '/explore',
    component: List,
    exact: true,
  },
  {
    path: '/lists/:listId',
    component: ListDetail,
    exact: true,
  },
  {
    path: '/account',
    component: Account,
    exact: true,
  },
  {
    path: '/login',
    component: Login,
    exact: true,
  },
  {
    path: '/signup',
    component: Signup,
    exact: true,
  },
  {
    path: '/forget-password',
    component: ForgetPassword,
    exact: true,
  },
]

export default routes
