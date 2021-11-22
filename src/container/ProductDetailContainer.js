import { useParams } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { ProductDetail } from '../components/ProductDetail';
import { Container, chakra } from '@chakra-ui/react';

export const ProductDetailContainer = () => {
  const productParam = useParams();
  const { products } = useApp();
  const filterData = products
    ? products.filter(({ id }) => productParam.id === id)
    : null;

  return (
    <>
      <chakra.section py="80px" w="100%" h="100vh" bgColor="#ededed">
        <Container
          maxW="container.lg"
          borderRadius="10px"
          bgColor="#fff"
          boxShadow="xl"
        >
          {filterData &&
            filterData.map(
              ({ description, src, name, price, stock, isNew }, index) => (
                <ProductDetail
                  key={index}
                  description={description}
                  src={src}
                  name={name}
                  price={price}
                  stock={stock}
                  isNew={isNew}
                />
              ),
            )}
        </Container>
      </chakra.section>
    </>
  );
};
