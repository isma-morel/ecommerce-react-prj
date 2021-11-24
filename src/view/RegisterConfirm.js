import { chakra, Container, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';

export const RegisterConfirm = () => {
  return (
    <>
      <chakra.section minH="100vh" bg="brand.100" color="white">
        <Container minW="container.lg">
          <Stack align="center" color="white" fontFamily="fonts.100">
            <Heading as="h1" fontSize="4xl">
              Error 404
            </Heading>
            <Text>Page not found</Text>
          </Stack>
        </Container>
      </chakra.section>
    </>
  );
};
