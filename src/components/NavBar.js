import { Box, Link, IconButton, Icon } from "@chakra-ui/react";
import { BsBox, BsPerson, BsSearch } from "react-icons/bs";

export const NavBar = () => {
  return (
    <>
      <Box
        d="flex"
        justifyContent="space-between"
        alignItems="center"
        color="brand.600"
        fontFamily="fonts.100"
        position="relative"
        w="100%"
        top="0"
        zIndex="9999"
        bg="brand.100"
        boxShadow="lg"
      >
        <Box>
          <Link d="block" px="4" h="100%" transition="ease .3s all">
            <Icon as={BsBox} w={8} h={8}></Icon>
          </Link>
        </Box>
        <Box
          d="flex"
          justifyContent="center"
          alignItems="center"
          fontWeight="bold"
        >
          <Link p="4" textDecoration="none" transition="ease .3s all">
            HOME
          </Link>
          <Link p="4" textDecoration="none" transition="ease .3s all">
            ABOUT
          </Link>
          <Link p="4" textDecoration="none" transition="ease .3s all">
            SHOP
          </Link>
          <Link p="4" textDecoration="none" transition="ease .3s all">
            CONTACT US
          </Link>
          <IconButton
            mx="2"
            aria-label="Search database"
            icon={<BsSearch />}
          ></IconButton>
          <IconButton
            mx="2"
            aria-label="Person"
            icon={<BsPerson />}
          ></IconButton>
        </Box>
      </Box>
    </>
  );
};
