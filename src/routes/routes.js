import { Error } from "../components/Error";
import { Home } from "../view/Home";
import { ListProducts } from "../container/ListProducts";
import { ProductDetailContainer } from "../container/ProductDetailContainer";

export const routes = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "products",
    component: <ListProducts />,
  },
  {
    path: "products/:id",
    component: <ProductDetailContainer />,
  },
  {
    path: "*",
    component: <Error />,
  },
];
