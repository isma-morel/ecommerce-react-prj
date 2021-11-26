import { BuysView } from '../view/BuysView';
import { ProfileView } from '../view/ProfileView';

export const privateRoutes = [
  {
    path: 'profile/',
    component: <ProfileView />,
  },
  {
    path: 'buys/',
    component: <BuysView />,
  },
];
