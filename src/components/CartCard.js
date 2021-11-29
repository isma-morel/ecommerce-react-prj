import React from 'react';
import {
  Stack,
  Icon,
  Heading,
  Text,
  IconButton,
  Flex,
  Link,
} from '@chakra-ui/react';
import { BsDash } from 'react-icons/bs';
import { Link as CustomLink } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export const CartCard = ({ price, name, isNew, id, stock, idCart }) => {
  const { removeItem } = useApp();
  const handleRemove = () => removeItem(idCart);
  return (
    <>
      <Stack
        py="4"
        bg="white"
        boxShadow="lg"
        my="4"
        borderRadius="10px"
        pos="relative"
        color="black"
        w="80%"
      >
        {isNew ? (
          <Icon
            viewBox="0 0 200 200"
            color="brand.100"
            pos="absolute"
            top="15%"
            right="15%"
          >
            <path
              fill="currentColor"
              d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
            />
          </Icon>
        ) : null}
        <Stack
          direction={{ base: 'column', md: 'row' }}
          justifyContent="space-between"
          px="20px"
          alignItems="center"
        >
          <Link
            as={CustomLink}
            to={`products/${id}`}
            _active={{}}
            _hover={{}}
            _focus={{}}
          >
            <Heading as="h2">{name}</Heading>
          </Link>
          <Text fontSize="1.2rem" fontWeight="bold">
            ${price}
          </Text>
          <Text fontSize="1.2rem" fontWeight="bold">
            {stock}
          </Text>
          <Flex direction={{ base: 'column', md: 'row' }}>
            <IconButton
              cursor="pointer"
              as={BsDash}
              color="brand.100"
              onClick={handleRemove}
            />
          </Flex>
        </Stack>
      </Stack>
    </>
  );
};
