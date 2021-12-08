import { Stack, Heading, Text, Link, chakra } from '@chakra-ui/react';
import { Link as CustomLink } from 'react-router-dom';

export const OrderCard = ({ id, items, total }) => {
  return (
    <Stack
      py="4"
      bg="white"
      boxShadow="lg"
      my="2"
      borderRadius="10px"
      pos="relative"
      color="black"
      w="80%"
      className="hola"
      id="2"
      transition=".3s ease all"
      _hover={{ transform: 'translateY(-10px)', boxShadow: '2xl' }}
    >
      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between"
        px="20px"
        alignItems="center"
        fontFamily="fonts.100"
      >
        <Link
          as={CustomLink}
          to={`/orders/${id}`}
          _active={{}}
          _hover={{}}
          _focus={{}}
        >
          <Heading as="h2" fontSize="1.3rem">
            Order:
            <chakra.span color="brand.100"> {id}</chakra.span>
          </Heading>
        </Link>
        <Text fontSize="1.2rem" fontWeight="bold">
          $<chakra.span color="brand.100">{total}</chakra.span>
        </Text>
        <Text fontSize="1.2rem" fontWeight="bold">
          Items:
          <chakra.span color="brand.100"> {items.length}</chakra.span>
        </Text>
      </Stack>
    </Stack>
  );
};
