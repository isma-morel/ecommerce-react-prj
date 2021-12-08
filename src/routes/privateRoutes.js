import { BuysView } from '../view/BuysView';
import { ProfileView } from '../view/ProfileView';
import { Order } from '../view/Order';

export const privateRoutes = [
  {
    path: 'profile/',
    component: <ProfileView />,
  },
  {
    path: 'buys/',
    component: <BuysView />,
  },
  {
    path: 'order/:id',
    component: <Order />,
  },
];
