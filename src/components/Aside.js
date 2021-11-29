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
import { CartCard } from './CartCard';

export const Aside = () => {
  let { action, toggleAction, clearCart, cart, total } = useApp();
  const aside = useRef();
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
      <Flex p="1.6rem 1.6rem 1.6rem" flexDir="column" h="80%">
        <Flex justifyContent="space-between" alignItems="center" pb="10px">
          <Heading
            color={'white'}
            fontFamily="fonts.100"
            as="h2"
            fontSize="1.2rem"
          >
            Cart{' '}
            <chakra.span fontSize="1rem" color={'white'}>
              ({cart ? cart.length : '0'})producto
            </chakra.span>
          </Heading>
          <Box>
            <Button onClick={toggleAction} mr="10px">
              Cerrar
            </Button>
            <Button disabled={cart ? null : 'disabled'} onClick={clearCart}>
              Borrar Todos
            </Button>
          </Box>
        </Flex>

        <Flex
          flexGrow="1"
          justifyContent="center"
          alignItems="center"
          flexDir="column"
          color={'white'}
          overflowY="auto"
          pt="20px"
        >
          {cart
            ? cart.length !== 0
              ? cart.map(
                  ({ src, price, name, isNew, id, stock, idCart }, index) => (
                    <CartCard
                      key={index}
                      src={src}
                      price={price}
                      name={name}
                      isNew={isNew}
                      id={id}
                      stock={stock}
                      idCart={idCart}
                    />
                  ),
                )
              : 'El carrito esta vacio'
            : 'EL carrito esta vacio'}
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
            ${total}
          </Heading>
        </Box>
        <Button
          disabled={cart ? null : 'disabled'}
          textTransform="uppercase"
          p="1.6rem 3.2rem"
        >
          Comprar
        </Button>
      </Flex>
    </Box>
  );
};
