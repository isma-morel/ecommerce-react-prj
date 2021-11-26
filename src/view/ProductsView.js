import { Container, Heading } from '@chakra-ui/react';
import { ListProducts } from '../container/ListProducts';

export const ProductsView = () => {
  return (
    <>
      <Container minW="100%" bg="brand.100" boxShadow="lg">
        <Heading as="h2" fontSize="4xl">
          Products
        </Heading>
        <ListProducts />
      </Container>
    </>
  );
};
