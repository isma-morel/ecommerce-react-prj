import { Error } from '../components/Error';
import { Home } from '../view/Home';
import { ProductDetailContainer } from '../container/ProductDetailContainer';
import { ProductsView } from '../view/ProductsView';
import { CredentialsView } from '../view/CredentialsView';
import { LoginView } from '../view/LoginView';
import { RegisterView } from '../view/RegisterView';

export const routes = [
  {
    path: '/',
    component: <Home />,
  },
  {
    path: 'products',
    component: <ProductsView />,
  },
  {
    path: 'products/:id',
    component: <ProductDetailContainer />,
  },
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
  {
    path: '*',
    component: <Error />,
  },
];
