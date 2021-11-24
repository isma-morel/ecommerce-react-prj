import { Container, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';

export const Error = () => {
  return (
    <Flex alignItems="center" minH="100vh" bg="brand.100" color="white">
      <Container minW="container.lg">
        <Stack align="center" color="white" fontFamily="fonts.100">
          <Heading as="h1" fontSize="6xl">
            Error 404
          </Heading>
          <Text fontSize="2xl">Page not found</Text>
        </Stack>
      </Container>
    </Flex>
  );
};
