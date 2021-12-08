import { Container, Grid } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Spinners } from '../components/Spinner';
import { useApp } from '../context/AppContext';
import { Products } from '../components/Products';
import { useLocation } from 'react-router-dom';

export const ListProducts = ({ value }) => {
  const { products } = useApp();
  const location = useLocation();
  const [listShow, setListShow] = useState(null);
  const [listShowFiltered, setListShowFiltered] = useState([]);
  console.log(value);
  useEffect(() => {
    location.pathname === '/'
      ? products && setListShow(products.filter(({ id }) => id < 7))
      : setListShow(products);
  }, [products]);

  useEffect(() => {
    const handleFiltro = (value) => {
      const regx = /^[0-9]+$/;
      if (value.match(regx)) {
        const lF = listShow.filter(({ price }) =>
          price.toString().startsWith(value),
        );
        console.log(lF);
        setListShowFiltered(lF);
      } else {
        const lF = listShow.filter(({ name }) =>
          name.toLowerCase().includes(value.toLowerCase()),
        );
        console.log(lF);
        setListShowFiltered(lF);
      }
      console.log(listShowFiltered);
    };
    value ? handleFiltro(value) : null;
  }, [value]);

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
        {value ? (
          listShowFiltered.map(({ name, src, price, id, isNew, stock }) => (
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
        ) : listShow ? (
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
