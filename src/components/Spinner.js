import { Spinner } from '@chakra-ui/react';

export const Spinners = () => {
  return (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
      pos={'absolute'}
      left="50%"
      top={'50%'}
      zIndex={'20'}
    />
  );
};
