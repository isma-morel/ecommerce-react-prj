import { Container, Grid } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Spinners } from '../components/Spinner';
import { useApp } from '../context/AppContext';
import { Products } from '../components/Products';
import { useLocation } from 'react-router-dom';

export const ListProducts = () => {
  const { products } = useApp();
  const location = useLocation();
  const [listShow, setListShow] = useState(
    location.pathname === '/products' ? products : null,
  );

  if (location.pathname === '/') {
    useEffect(() => {
      products && setListShow(products.filter(({ id }) => id < 7));
    }, [products]);
  }

  return (
    <Container minW="container.lg">
      <Grid
        gridRowGap={4}
        bgColor="brand.100"
        templateColumns="repeat(3, 1fr)"
        gap={4}
        py="30px"
        px="2%"
        w="100%"
        minH="100vh"
        pos={'relative'}
        zIndex={'20'}
      >
        {listShow ? (
          listShow.map(({ name, src, price, id, isNew, stock }) => (
            <Products
              key={id}
              name={name}
              src={src}
              price={price}
              isNew={isNew}
              id={id}
              stock={stock}
            />
          ))
        ) : (
          <Spinners />
        )}
      </Grid>
    </Container>
  );
};
