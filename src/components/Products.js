import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  chakra,
  Tooltip,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Products = ({ src, price, name, isNew, id }) => {
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Link to={`/products/${id}`}>
        <Box
          bg={useColorModeValue("gray.100", "gray.100")}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          transition=".3s ease all"
          position="relative"
          _hover={{ boxShadow: "dark-lg" }}
        >
          {isNew && (
            <Circle
              size="10px"
              position="absolute"
              top={2}
              right={2}
              bg="red.200"
            />
          )}

          <Image
            src={src}
            alt={`Picture of ${name}`}
            boxShadow="base"
            roundedTop="lg"
          />

          <Box p="6">
            <Box d="flex" alignItems="baseline">
              {isNew && (
                <Badge
                  rounded="full"
                  px="2"
                  fontSize="0.8em"
                  colorScheme="black"
                >
                  New
                </Badge>
              )}
            </Box>
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
                color={useColorModeValue("black", "black")}
              >
                {name}
              </Box>
              <Tooltip
                label="Add to cart"
                bg="white"
                placement={"top"}
                color={"gray.800"}
                fontSize={"1.2em"}
              >
                <chakra.a href={"#"} display={"flex"}></chakra.a>
              </Tooltip>
            </Flex>

            <Flex justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                color={useColorModeValue("gray.800", "gray.800")}
              >
                <Box as="span" color={"gray.600"} fontSize="lg">
                  £
                </Box>
                {price}
              </Box>
            </Flex>
          </Box>
        </Box>
      </Link>
    </Flex>
  );
};
