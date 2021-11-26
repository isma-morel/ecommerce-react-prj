import { Error } from '../view/Error';
import { Home } from '../view/Home';
import { ProductDetailContainer } from '../container/ProductDetailContainer';
import { ProductsView } from '../view/ProductsView';

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
    path: '*',
    component: <Error />,
  },
];
