import { useState } from 'react';
import {
  Flex,
  Button,
  Text,
  Badge,
  chakra,
  useToast,
  Heading,
} from '@chakra-ui/react';

export const ItemCount = ({ numberStock }) => {
  const [count, setCount] = useState(1);
  const [stock, setStock] = useState(numberStock - 1);
  const toast = useToast();
  const handleAddCount = () => {
    if (stock > 0) {
      setCount(count + 1);
      setStock(stock - 1);
    } else {
      toast({
        title: 'Error',
        description: 'No puedes agregar más si no hay stock',
        status: 'error',
        duration: '800',
        isClosable: 'true',
      });
    }
  };
  const handleDecreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
      setStock(stock + 1);
    } else {
      toast({
        title: 'Error',
        description: 'No puedes comprar menos de 1 objeto',
        status: 'error',
        duration: '800',
        isClosable: 'true',
      });
    }
  };

  return (
    <>
      <Heading as="h3" fontSize="1.3rem" fontFamily="fonts.100">
        Selecciona cuantos items quieres comprar:
      </Heading>
      <Badge color="white" my="15px" bg="brand.100" borderRadius="5px">
        Stock Disponible: {stock}
      </Badge>
      <Flex mb="10px" alignItems="center" justifyContent="flex-start">
        <Button
          minW="25px"
          m="0px"
          p="0px"
          bg="brand.100"
          rounded="md"
          boxShadow="2xl"
          color="brand.600"
          h="25px"
          fontWeight="500"
          textAlign="center"
          onClick={handleAddCount}
          _hover={{ _after: { transform: 'scale(3.3)', opacity: '0.5' } }}
          pos="relative"
          overflow="hidden"
          _focus={{}}
          _after={{
            content: '""',
            opacity: '0',
            w: '10px',
            h: '10px',
            pos: 'absolute',
            bg: 'gray',
            borderRadius: '100%',
            transition: '.3s ease all',
          }}
        >
          <chakra.span pos="relative" zIndex="20">
            +
          </chakra.span>
        </Button>
        <Text mx="20px">{count}</Text>
        <Button
          minW="25px"
          m="0px"
          p="0px"
          bg="brand.100"
          rounded="md"
          boxShadow="2xl"
          color="brand.600"
          h="25px"
          fontWeight="500"
          textAlign="center"
          onClick={handleDecreaseCount}
          _hover={{ _after: { transform: 'scale(3.3)', opacity: '0.5' } }}
          pos="relative"
          overflow="hidden"
          _focus={{}}
          _after={{
            content: '""',
            opacity: '0',
            w: '10px',
            h: '10px',
            pos: 'absolute',
            bg: 'gray',
            borderRadius: '100%',
            transition: '.3s ease all',
          }}
        >
          <chakra.span pos="relative" zIndex="20">
            -
          </chakra.span>
        </Button>
      </Flex>
    </>
  );
};
