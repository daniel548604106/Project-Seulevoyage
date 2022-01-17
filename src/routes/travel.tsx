import Travel from '@/pages/Travel';
import Journey from '@/pages/Travel/journey';

const routes = [
  { path: '/tabs/travel', component: Travel, exact: true },
  { path: '/tabs/travel/journeys/:id', component: Journey, exact: true },
]

export default routes
