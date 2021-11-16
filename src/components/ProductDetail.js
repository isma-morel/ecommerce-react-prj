import {
  Container,
  Flex,
  Box,
  Image,
  Heading,
  Button,
  Divider,
  Badge,
  chakra,
} from "@chakra-ui/react";

import { ItemCount } from "./ItemCount";
export const ProductDetail = ({
  description,
  src,
  name,
  stock,
  price,
  isNew,
}) => {
  return (
    <>
      <Container maxW="container.lg" bg="transparent">
        <Flex justifyContent="space-around">
          <Box borderRadius="5px" py="10px">
            <Image m="auto" src={src} alt={`${name} product`} w="90%" />
          </Box>
          <Flex
            mt="10px"
            justifyContent="space-evenly"
            flexDir="column"
            color="black"
            w="50%"
          >
            <Box>
              {isNew ? (
                <Badge rounded="full" px="2" fontSize="1em" bgColor="brand.100">
                  New
                </Badge>
              ) : null}

              <Heading fontFamily="fonts.100" as="h2" fontSize="3rem">
                {name}
              </Heading>
              <Heading
                fontFamily="fonts.100"
                as="h3"
                fontSize="1.1rem"
                color="gray.500"
              >
                {description}
              </Heading>
              <Heading as="h3" fontSize="1.5rem" color="brand.100" pt="10px">
                ${price}
              </Heading>
            </Box>
            <Divider bg="gray" />
            <Box>{<ItemCount numberStock={Number(stock)} />}</Box>
            <Box>
              <Button
                w="25%"
                mr="10px"
                bgColor="brand.100"
                _hover={{ _after: { transform: "scale(20)", opacity: "0.5" } }}
                pos="relative"
                color="brand.600"
                overflow="hidden"
                _focus={{}}
                _after={{
                  content: '""',
                  opacity: "0",
                  w: "10px",
                  h: "10px",
                  pos: "absolute",
                  bg: "gray",
                  borderRadius: "100%",
                  transition: ".3s ease all",
                }}
              >
                <chakra.span
                  fontFamily="fonts.100"
                  fontWeight="300"
                  pos="relative"
                  zIndex="20"
                >
                  Comprar
                </chakra.span>
              </Button>
              <Button
                w="25%"
                mx="10px"
                bgColor="brand.100"
                _hover={{ _after: { transform: "scale(20)", opacity: "0.5" } }}
                pos="relative"
                color="brand.600"
                overflow="hidden"
                _focus={{}}
                _after={{
                  content: '""',
                  opacity: "0",
                  w: "10px",
                  h: "10px",
                  pos: "absolute",
                  bg: "gray",
                  borderRadius: "100%",
                  transition: ".3s ease all",
                }}
              >
                <chakra.span
                  fontFamily="fonts.100"
                  fontWeight="300"
                  pos="relative"
                  zIndex="20"
                >
                  Añadir al carrito
                </chakra.span>
              </Button>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </>
  );
};
