import { Error } from '../view/Error';
import { Home } from '../view/Home';
import { ProductDetailContainer } from '../container/ProductDetailContainer';
import { ProductsView } from '../view/ProductsView';
import { CredentialsView } from '../view/CredentialsView';
import { LoginView } from '../view/LoginView';
import { RegisterView } from '../view/RegisterView';
import { RegisterConfirm } from '../view/RegisterConfirm';

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
    path: 'auth/register/confirm',
    component: <RegisterConfirm />,
  },
  {
    path: '*',
    component: <Error />,
  },
];
