import {
  Box,
  Heading,
  Text,
  ButtonGroup,
  Button,
  Image,
} from "@chakra-ui/react";

export const CarouselItem = ({
  src,
  text,
  tittle,
  tittleStylish,
  btn1,
  btn2,
}) => {
  return (
    <Box
      w="100%"
      d="flex"
      alignItems="center"
      justifyContent="space-around"
      py="2rem"
    >
      <Box fontFamily="fonts.100" textAlign="left" py="20px">
        <Heading as="h1" size="3xl" color="brand.200" fontWeight="bold">
          {tittle}
          <Text color="brand.600" d="inline-block">
            {tittleStylish}
          </Text>
        </Heading>
        <Text
          lineHeight="24px"
          fontFamily="fonts.200"
          py="9px"
          m="20px"
          mb="50px"
        >
          {text}
        </Text>
        <ButtonGroup variant="solid">
          <Button
            transition="ease .4s all"
            boxShadow="xl"
            rounded="md"
            w="100%"
            maxW="170px"
            _focus={{ boxShadow: "none" }}
            _hover={{ bg: "brand.600", color: "brand.300" }}
            bg="brand.300"
            textTransform="capitalize"
          >
            {btn1}
          </Button>
          <Button
            transition="ease .4s all"
            boxShadow="xl"
            rounded="md"
            w="100%"
            maxW="170px"
            _focus={{ boxShadow: "none" }}
            _hover={{ bg: "brand.600", color: "brand.300" }}
            bg="brand.300"
            textTransform="capitalize"
          >
            {btn2}
          </Button>
        </ButtonGroup>
      </Box>
      <Box boxSize="sm">
        <Image src={src} alt="" />
      </Box>
    </Box>
  );
};
