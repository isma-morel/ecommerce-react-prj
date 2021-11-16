import { Carrousel } from "../container/Carrousel";
import { Products } from "../components/Products";
import { Box, Heading, chakra, Text, Grid, Container } from "@chakra-ui/react";
import { useProducts } from "../context/ProductsContext";
import { useEffect, useState } from "react";

export const Home = () => {
  const [listShow, setListShow] = useState(null);
  const product = useProducts();
  useEffect(() => {
    product && setListShow(product.filter(({ id }) => id < 7));
  }, [product]);

  return (
    <>
      <Carrousel />
      <Box bgColor="white">
        <Box textAlign="start" px="10%" pt="90px" pb="50px">
          <Heading fontSize="50px" color="brand.300" mb="20px">
            Our <chakra.span color="brand.100">Products</chakra.span>
          </Heading>
          <Text color="brand.300" fontSize="1.1rem">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            randomised words which don't look even slightly believable
          </Text>
        </Box>
        <Box w="100%" h="100%" bgColor="brand.100" overflow="hidden">
          <Container minW="container.lg">
            <Grid
              gridRowGap={4}
              bgColor="brand.100"
              templateColumns="repeat(3, 1fr)"
              gap={4}
              py="30px"
              px="2%"
              w="100%"
            >
              {listShow &&
                listShow.map(({ name, src, price, id, isNew }) => (
                  <Products
                    key={id}
                    name={name}
                    src={src}
                    price={price}
                    isNew={isNew}
                    id={id}
                  />
                ))}
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};
