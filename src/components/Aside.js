import { useApp } from '../context/AppContext';
import { useRef } from 'react';
import {
  Box,
  Flex,
  Heading,
  Button,
  chakra,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export const Aside = () => {
  let { action, toggleAction } = useApp();
  const aside = useRef();
  const list = false;
  return (
    <Box
      ref={aside}
      bg="rgba(19, 106, 248, 0.8)"
      zIndex="99999"
      pos="fixed"
      h="100vh"
      w="45%"
      top="0"
      transition=".3s ease all"
      right={action ? '0' : '-45%'}
      boxShadow="lg"
      backdropFilter="saturate(180%) blur(5px)"
      fontFamily="fonts.100"
    >
      <Flex p="1.6rem 1.6rem 1.6rem" overflow="auto" flexDir="column" h="80%">
        <Flex justifyContent="space-between" alignItems="center">
          <Heading
            color={'white'}
            fontFamily="fonts.100"
            as="h2"
            fontSize="1.2rem"
          >
            Cart{' '}
            <chakra.span fontSize="1rem" color={'white'}>
              (0)producto
            </chakra.span>
          </Heading>
          <Box>
            <Button onClick={toggleAction} mr="10px">
              Cerrar
            </Button>
            <Button disabled>Borrar Todos</Button>
          </Box>
        </Flex>

        <Flex
          flexGrow="1"
          justifyContent="center"
          alignItems="center"
          color={'white'}
        >
          {list ? 'Hay items' : 'El carrito esta vacio'}
        </Flex>
      </Flex>

      <Flex
        p="1.6rem"
        alignItems="center"
        justifyContent="space-between"
        w="100%"
        h="20%"
      >
        <Box>
          <Text fontSize="1.1rem" color={useColorModeValue('white', 'white')}>
            Total:
          </Text>
          <Heading
            fontSize="1.5rem"
            fontFamily="fonts.100"
            as="h2"
            marginY="1rem"
            color={'white'}
          >
            $0.00
          </Heading>
        </Box>
        <Button textTransform="uppercase" p="1.6rem 3.2rem">
          Comprar
        </Button>
      </Flex>
    </Box>
  );
};
