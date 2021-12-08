import { useParams } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { ProductDetail } from '../components/ProductDetail';
import {
  Container,
  chakra,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import { Link as CustomLink } from 'react-router-dom';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Spinners } from '../components/Spinner';

export const ProductDetailContainer = () => {
  const productParam = useParams();
  const { products } = useApp();
  const filterData = products
    ? products.filter(({ id }) => productParam.id === id)
    : null;

  return (
    <>
      <chakra.section pt="100px" w="100%" h="100vh" bgColor="#ededed">
        {filterData ? (
          <Container
            maxW="container.lg"
            borderRadius="10px"
            bgColor="#fff"
            boxShadow="xl"
          >
            <Breadcrumb
              spacing="8px"
              separator={<ChevronRightIcon color="gray.500" />}
            >
              <BreadcrumbItem>
                <BreadcrumbLink as={CustomLink} to={'/'}>
                  hola
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            {filterData &&
              filterData.map(
                (
                  { description, src, name, price, stock, isNew, id },
                  index,
                ) => (
                  <ProductDetail
                    key={index}
                    description={description}
                    src={src}
                    name={name}
                    price={price}
                    stock={stock}
                    isNew={isNew}
                    id={id}
                  />
                ),
              )}
          </Container>
        ) : (
          <Spinners />
        )}
      </chakra.section>
    </>
  );
};
