import { Carrousel } from '../container/Carrousel';
import { Box, Heading, chakra, Text } from '@chakra-ui/react';
import { ListProducts } from '../container/ListProducts';

export const Home = () => {
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
            randomised words which dont look even slightly believable
          </Text>
        </Box>
        <Box w="100%" h="100%" bgColor="brand.100" overflow="hidden">
          <ListProducts />
        </Box>
      </Box>
    </>
  );
};
