import Travel from '@/pages/Travel';
import Journey from '@/pages/Travel/journey';

const routes = [
  { path: '/travel', component: Travel, exact: true },
  { path: '/travel/journeys/:id', component: Journey, exact: true },
]

export default routes
