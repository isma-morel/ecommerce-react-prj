import { chakra, Container, Flex, Heading } from '@chakra-ui/react';
import { OrderCard } from '../components/OrderCard';
import { useApp } from '../context/AppContext';

export const OrdersView = () => {
  const { orders, status } = useApp();
  return (
    <>
      <chakra.section
        minH="100vh"
        width="100%"
        background="brand.100"
        p="20px"
        pt="65px"
      >
        <Container
          minW="container.lg"
          boxShadow="2xl"
          rounded="lg"
          background="white"
        >
          {console.log(orders, status)}
          <Heading as="h2" p="20px" pl="25px" pt="30px" color="brand.100">
            <chakra.span color="black">Ord</chakra.span>
            ers:
          </Heading>
          <Flex
            justifyContent="center"
            alignItems="center"
            flexDir="column"
            py="10px"
          >
            {orders &&
              orders.map(({ orderId, items, total }, index) => (
                <OrderCard
                  key={index}
                  id={orderId}
                  items={items}
                  total={total}
                />
              ))}
          </Flex>
        </Container>
      </chakra.section>
    </>
  );
};
