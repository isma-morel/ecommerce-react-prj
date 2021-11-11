import {
  Container,
  Wrap,
  WrapItem,
  Center,
  Image,
  chakra,
  Heading,
} from "@chakra-ui/react";

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
      <Container maxW="container.xl" bg="transparent" pt="25%">
        <Wrap>
          <WrapItem>
            <Center>
              <Image src={src} alt={`picture of ${name}`} />
            </Center>
          </WrapItem>
          <WrapItem>
            <Center pos="relative">
              <chakra.span
                pos="absolute"
                top="0"
                rigth="0"
                bg={isNew ? "red" : "green"}
                borderRadius="50%"
              ></chakra.span>
              <Heading as="h1">{name}</Heading>
              <Heading as="h2">{description}</Heading>
              <Heading as="h3">{price}</Heading>
              <chakra.span>{stock}</chakra.span>
            </Center>
          </WrapItem>
        </Wrap>
      </Container>
    </>
  );
};
