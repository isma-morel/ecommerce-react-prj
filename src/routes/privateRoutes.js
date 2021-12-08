import { BuysView } from '../view/BuysView';
import { ProfileView } from '../view/ProfileView';
import { Order } from '../view/Order';
import { OrdersView } from '../view/OrdersView';

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
    path: 'orders/',
    component: <OrdersView />,
  },
  {
    path: 'orders/:id',
    component: <Order />,
  },
];
