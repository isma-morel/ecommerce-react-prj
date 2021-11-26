import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  chakra,
  Tooltip,
  Icon,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { BsCart2 } from 'react-icons/bs';

export const Products = ({ src, price, name, isNew, id }) => {
  const { status } = useApp();
  const navigate = useNavigate();
  const handleCart = () => navigate('/auth');
  const handleClick = () => navigate(`/products/${id}`);
  return (
    <Flex
      w="100%"
      alignItems="center"
      justifyContent="space-around"
      bg="transparent"
    >
      <Box
        bg={useColorModeValue('gray.100', 'gray.100')}
        maxW="300px"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
        transition=".3s ease all"
        className="productHover"
      >
        {isNew && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red.200"
            zIndex="20"
          />
        )}
        <Box
          overflow="hidden"
          rounded="lg"
          boxShadow="base"
          onClick={handleClick}
          cursor="pointer"
        >
          <Image
            src={src}
            alt={`Picture of ${name}`}
            roundedTop="lg"
            transition=".5s ease all"
            sx={{ '.productHover:hover &': { transform: 'scale(1.05)' } }}
          />
        </Box>

        <Box p="4" pos="relative">
          {isNew && (
            <Badge
              rounded="full"
              px="2"
              fontSize="0.8em"
              bgColor="brand.100"
              pos="absolute"
              right="5%"
              top="15%"
              color="white"
            >
              New
            </Badge>
          )}

          <Flex justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
              onClick={handleClick}
              cursor="pointer"
              color={useColorModeValue('black', 'black')}
            >
              {name}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={'top'}
              color={'gray.800'}
              fontSize={'1.2em'}
            >
              <chakra.span
                onClick={
                  status ? console.log('añadido al carrito') : handleCart
                }
                cursor="pointer"
                href={'#'}
                display={'flex'}
                pos="absolute"
                bottom="15%"
                right="7%"
                zIndex="50"
              >
                <Icon
                  color="black"
                  as={BsCart2}
                  h={7}
                  w={7}
                  alignSelf="flex-end"
                />
              </chakra.span>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              color={useColorModeValue('gray.800', 'gray.800')}
            >
              <Box as="span" color={'gray.600'} fontSize="lg">
                $
              </Box>
              {price}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};
