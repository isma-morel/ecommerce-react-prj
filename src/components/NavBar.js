import { Box, Link, IconButton, Icon } from "@chakra-ui/react";
import { BsBox, BsPerson, BsSearch } from "react-icons/bs";
import { Link as CustomLink } from "react-router-dom";

const links = [
  {
    path: "/",
    text: "HOME",
  },
  {
    path: "/about",
    text: "ABOUT",
  },
  {
    path: "/shop",
    text: "SHOP",
  },
  {
    path: "/contact",
    text: "CONTACT US",
  },
];

const Links = ({ path, text }) => {
  return (
    <Link
      as={CustomLink}
      to={path}
      p="4"
      textDecoration="none"
      transition="ease .3s all"
      _focus={{}}
    >
      {text}
    </Link>
  );
};

export const NavBar = () => {
  return (
    <>
      <Box
        d="flex"
        justifyContent="space-between"
        alignItems="center"
        color="brand.600"
        fontFamily="fonts.100"
        position="fixed"
        w="100%"
        top="0"
        zIndex="9999"
        bg="rgba(19, 106, 248, 0.8)"
        boxShadow="lg"
        backdropFilter="saturate(180%) blur(5px)"
      >
        <Box>
          <Link
            as={CustomLink}
            to={"/"}
            d="block"
            px="4"
            h="100%"
            transition="ease .3s all"
            _focus={{}}
          >
            <Icon as={BsBox} w={8} h={8}></Icon>
          </Link>
        </Box>
        <Box
          d="flex"
          justifyContent="center"
          alignItems="center"
          fontWeight="bold"
        >
          {links.map(({ path, text }) => (
            <Links path={path} text={text} />
          ))}
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
