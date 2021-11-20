import { Box, IconButton } from "@chakra-ui/react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export const CarrouselButton = ({ next, previous }) => {
  return (
    <Box d="flex" mx="4" flexDir="column" position="absolute" zIndex="500">
      <IconButton
        onClick={previous}
        size="lg"
        my="5px"
        _focus={{ boxShadow: "none" }}
        bg="brand.600"
        color="brand.300"
        borderRadius="100%"
        boxShadow="lg"
        aria-label="Arrow Left"
        icon={<BsArrowLeft />}
      ></IconButton>
      <IconButton
        onClick={next}
        size="lg"
        my="5px"
        _focus={{ boxShadow: "none" }}
        bg="brand.600"
        color="brand.300"
        borderRadius="100%"
        boxShadow="lg"
        aria-label="Arrow Right"
        icon={<BsArrowRight />}
      ></IconButton>
    </Box>
  );
};
