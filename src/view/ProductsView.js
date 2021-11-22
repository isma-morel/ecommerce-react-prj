import { chakra } from '@chakra-ui/react';

import { ListProducts } from '../container/ListProducts';

export const ProductsView = () => {
  return (
    <>
      <chakra.section id="mainApp">
        <ListProducts />
      </chakra.section>
    </>
  );
};
