import { Box, Container, FormControl, Heading, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { ListProducts } from '../container/ListProducts';

export const ProductsView = () => {
  const [valueFilter, setValueFilter] = useState('');
  const handleChangeFiltro = ({ target: { value } }) => {
    setValueFilter(value);
    console.log(valueFilter);
  };
  return (
    <>
      <Container minW="100%" bg="brand.100" boxShadow="lg">
        <Heading
          textAlign="center"
          color="white"
          as="h2"
          fontSize="4xl"
          pt="100px"
          mb="20px"
        >
          Products
        </Heading>
        <Box>
          <FormControl w="300px">
            <Input
              onChange={handleChangeFiltro}
              background="white"
              color="black"
              boxShadow="md"
              placeholder="Filter for name or price"
              _placeholder={{ color: 'gray.400' }}
            />
          </FormControl>
        </Box>
        <ListProducts value={valueFilter} />
      </Container>
    </>
  );
};
