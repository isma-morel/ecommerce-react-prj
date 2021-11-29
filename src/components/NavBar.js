import {
  Box,
  Link,
  IconButton,
  Icon,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  MenuDivider,
  useToast,
  Badge,
} from '@chakra-ui/react';
import {
  BsBox,
  BsPerson,
  BsSearch,
  BsCart2,
  BsBag,
  BsArrowBarRight,
  BsPersonCircle,
} from 'react-icons/bs';
import { Link as CustomLink, useNavigate } from 'react-router-dom';
// import { useRef } from "react";
import { useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Aside } from './Aside';
import { auth } from '../firebase/firebaseConfig';
import { signOut } from 'firebase/auth';

const links = [
  {
    path: '/',
    text: 'HOME',
  },
  {
    path: '/about',
    text: 'ABOUT',
  },
  {
    path: '/products',
    text: 'PRODUCTS',
  },
  {
    path: '/contact',
    text: 'CONTACT US',
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

const menuItems = [
  {
    text: 'Profile',
    icon: <BsPersonCircle />,
    path: 'profile',
  },
  {
    text: 'Buys',
    icon: <BsBag />,
    path: '/buys',
  },
  {
    divider: <MenuDivider borderColor="rgba(255,255,255, 0.16)" />,
    text: 'Log Out',
    icon: <BsArrowBarRight />,
    path: '/',
  },
];

const MenuItems = ({ text, icon, path, divider }) => {
  const toast = useToast();
  const navigate = useNavigate();
  const handlerSignOut = () => {
    signOut(auth)
      .then(() => {
        toast({
          title: 'Successful Log Out. See you later...',
          status: 'success',
          duration: 1000,
          isClosable: true,
        });
        navigate('/');
        localStorage.removeItem('cart');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {divider}
      <Link
        as={CustomLink}
        onClick={text === 'Log Out' ? handlerSignOut : null}
        to={path}
      >
        <MenuItem
          _active={{ background: 'rgba(255,255,255, 0.24)' }}
          _hover={{
            background: 'rgba(255,255,255, 0.16)',
          }}
          _focus={{
            background: 'rgba(255,255,255, 0.06)',
          }}
          icon={icon}
        >
          {text}
        </MenuItem>
      </Link>
    </>
  );
};

export const NavBar = () => {
  const { status } = useApp();
  let { toggleAction, closeAction, action } = useApp();
  useEffect(() => {
    if (action) {
      const main = document.querySelector('#mainApp');
      main.addEventListener('click', closeAction);
      return () => {
        main.removeEventListener('click', closeAction);
      };
    }
  });
  const { cart } = useApp();

  const navigate = useNavigate();
  const redirectLogin = () =>
    status ? navigate('/profile') : navigate('/auth');
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
            to={'/'}
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
          // ref={navItems}
        >
          <IconButton
            mx="2"
            aria-label="Search database"
            icon={<BsSearch />}
            _active={{ background: 'rgba(255,255,255, 0.24)' }}
            _hover={{
              background: 'rgba(255,255,255, 0.16)',
            }}
            bg="rgba(255,255,255, 0.08)"
          ></IconButton>
          {links.map(({ path, text }, index) => (
            <Links key={index} path={path} text={text} />
          ))}
          <Box pos="relative" mx="2" d="inline-flex">
            <IconButton
              aria-label="Cart"
              icon={<BsCart2 BsBag />}
              _active={{ background: 'rgba(255,255,255, 0.24)' }}
              _hover={{
                background: 'rgba(255,255,255, 0.16)',
              }}
              onClick={toggleAction}
              bg="rgba(255,255,255, 0.08)"
            ></IconButton>
            {cart && (
              <Badge pos="absolute" top="0" right="0">
                {cart.length}
              </Badge>
            )}
          </Box>
          {status ? (
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<BsPerson />}
                variant="outline"
                mx="2"
                _active={{ background: 'rgba(255,255,255, 0.24)' }}
                _hover={{
                  background: 'rgba(255,255,255, 0.16)',
                }}
                bg="rgba(255,255,255, 0.08)"
                border="none"
              />
              <MenuList
                bg="rgba(19, 106, 248, 0.8)"
                boxShadow="lg"
                borderColor="rgba(255,255,255, 0.16)"
                backdropFilter="saturate(180%) blur(5px)"
              >
                {menuItems.map(({ text, path, divider, icon }, index) => (
                  <MenuItems
                    key={index}
                    text={text}
                    path={path}
                    divider={divider}
                    icon={icon}
                  />
                ))}
              </MenuList>
            </Menu>
          ) : (
            <IconButton
              mx="2"
              aria-label="Person"
              icon={<BsPerson />}
              onClick={redirectLogin}
              _active={{ background: 'rgba(255,255,255, 0.24)' }}
              _hover={{
                background: 'rgba(255,255,255, 0.16)',
              }}
              bg="rgba(255,255,255, 0.08)"
            ></IconButton>
          )}
        </Box>
      </Box>
      {<Aside />}
    </>
  );
};
