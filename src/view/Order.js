import React, { useState, useEffect } from 'react';
import {
  Container,
  Input,
  FormControl,
  Heading,
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Badge,
  Image,
} from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Spinners } from '../components/Spinner';

export const Order = () => {
  const [mainOrder, setMainOrder] = useState();
  const { orders } = useApp();
  const { id: idOrder } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const orderFound =
      orders && orders.find(({ orderId }) => orderId === idOrder);
    setMainOrder(orderFound);
  }, [orders]);

  return (
    <>
      <Container
        minW="container.lg"
        marginTop="70px"
        pos="relative"
        minH="100vh"
        boxShadow="xl"
        rounded="xl"
      >
        {console.log(mainOrder)}
        {mainOrder ? (
          <>
            <Heading as="h2" fontSize="2rem" py="20px">
              Purchase made successfully
            </Heading>
            <Heading as="h2" fontSize="1.6rem">
              ID:{' '}
              <chakra.span color="brand.100"> {mainOrder.orderId}</chakra.span>{' '}
            </Heading>
            <Box py="15px">
              <Heading></Heading>
              <FormControl>
                <Input
                  value={mainOrder ? mainOrder.buyer.email : ' '}
                  disabled
                />
              </FormControl>
              <FormControl>
                <Input
                  value={mainOrder ? mainOrder.buyer.name : ' '}
                  disabled
                />
              </FormControl>
              <FormControl>
                <Input
                  value={
                    mainOrder
                      ? mainOrder.buyer.phone
                        ? mainOrder.buyer.phone
                        : ' '
                      : ' '
                  }
                  disabled
                />
              </FormControl>
            </Box>
            <Box fontFamily="fonts.100">
              <Heading color="brand.100">Items</Heading>

              <Flex
                flexWrap="wrap"
                justifyContent="space-around"
                alignItems="center"
                py="25px"
              >
                {mainOrder.items.map(
                  ({ src, price, name, isNew, id }, index) => (
                    <Flex
                      alignItems="center"
                      justifyContent="space-around"
                      bg="transparent"
                      key={index}
                    >
                      <Box
                        bg={useColorModeValue('gray.100', 'gray.100')}
                        maxW="300px"
                        borderWidth="1px"
                        rounded="lg"
                        shadow="lg"
                        position="relative"
                        transition=".3s ease all"
                        className="productHover"
                      >
                        <Box
                          overflow="hidden"
                          rounded="lg"
                          boxShadow="base"
                          cursor="pointer"
                        >
                          <Image
                            src={src}
                            alt={`Picture of ${name}`}
                            roundedTop="lg"
                            transition=".5s ease all"
                            sx={{
                              '.productHover:hover &': {
                                transform: 'scale(1.05)',
                              },
                            }}
                            onClick={() => navigate(`/products/${id}`)}
                          />
                        </Box>

                        <Box p="4" pos="relative">
                          {isNew && (
                            <Badge
                              rounded="full"
                              px="2"
                              fontSize="0.8em"
                              bgColor="brand.100"
                              pos="absolute"
                              right="5%"
                              top="15%"
                              color="white"
                            >
                              New
                            </Badge>
                          )}

                          <Flex
                            justifyContent="space-between"
                            alignContent="center"
                          >
                            <Box
                              fontSize="2xl"
                              fontWeight="semibold"
                              as="h4"
                              lineHeight="tight"
                              isTruncated
                              cursor="pointer"
                              color={useColorModeValue('black', 'black')}
                              onClick={() => navigate(`/products/${id}`)}
                            >
                              {name}
                            </Box>
                          </Flex>

                          <Flex
                            justifyContent="space-between"
                            alignContent="center"
                          >
                            <Box fontSize="2xl" color="brand.100">
                              <Box as="span" color={'gray.600'} fontSize="lg">
                                $
                              </Box>
                              {price}
                            </Box>
                          </Flex>
                        </Box>
                      </Box>
                    </Flex>
                  ),
                )}
              </Flex>
            </Box>
            <Heading
              textAlign="end"
              as="h2"
              fontSize="1.6rem"
              fontFamily="fonts.100"
              py="20px"
            >
              Total: ${' '}
              <chakra.span color="brand.100">{mainOrder.total}</chakra.span>
            </Heading>
          </>
        ) : (
          <Spinners />
        )}
      </Container>
    </>
  );
};
