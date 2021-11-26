import { CredentialsView } from '../view/CredentialsView';
import { LoginView } from '../view/LoginView';
import { RegisterView } from '../view/RegisterView';

export const credentialsRoutes = [
  {
    path: 'auth',
    component: <CredentialsView />,
  },
  {
    path: 'auth/login',
    component: <LoginView />,
  },
  {
    path: 'auth/register',
    component: <RegisterView />,
  },
];
