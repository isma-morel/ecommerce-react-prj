import { Box, IconButton, useColorModeValue } from '@chakra-ui/react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

export const CarrouselButton = ({ next, previous }) => {
  return (
    <Box d="flex" mx="4" flexDir="column" position="absolute" zIndex="500">
      <IconButton
        onClick={previous}
        size="lg"
        my="5px"
        _focus={{ boxShadow: 'none' }}
        bg="brand.600"
        color="brand.300"
        borderRadius="100%"
        boxShadow="lg"
        aria-label="Arrow Left"
        icon={<BsArrowLeft />}
        _active={{
          background: useColorModeValue(
            'rgba(255,255,255, 0.24)',
            'rgba(255,255,255, 0.24)',
          ),
        }}
        _hover={{
          background: useColorModeValue(
            'rgba(255,255,255, 0.16)',
            'rgba(255,255,255, 0.16)',
          ),
        }}
      ></IconButton>
      <IconButton
        onClick={next}
        size="lg"
        my="5px"
        _focus={{ boxShadow: 'none' }}
        bg="brand.600"
        color="brand.300"
        borderRadius="100%"
        boxShadow="lg"
        aria-label="Arrow Right"
        icon={<BsArrowRight />}
        _active={{
          background: useColorModeValue(
            'rgba(255,255,255, 0.24)',
            'rgba(255,255,255, 0.24)',
          ),
        }}
        _hover={{
          background: useColorModeValue(
            'rgba(255,255,255, 0.16)',
            'rgba(255,255,255, 0.16)',
          ),
        }}
      ></IconButton>
    </Box>
  );
};
