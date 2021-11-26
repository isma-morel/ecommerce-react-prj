import {
  Box,
  Link,
  IconButton,
  Icon,
  useColorModeValue,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  MenuDivider,
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
    divider: <MenuDivider />,
    text: 'Log Out',
    icon: <BsArrowBarRight />,
    path: '/',
  },
];

const MenuItems = ({ text, icon, path, divider }) => {
  const handlerSignOut = () => {
    signOut(auth)
      .then((dt) => console.log(`succefull ${dt}`))
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
            bg={useColorModeValue(
              'rgba(255,255,255, 0.08)',
              'rgba(255,255,255, 0.08)',
            )}
          ></IconButton>
          {links.map(({ path, text }, index) => (
            <Links key={index} path={path} text={text} />
          ))}
          <IconButton
            mx="2"
            aria-label="Cart"
            icon={<BsCart2 BsBag />}
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
            onClick={toggleAction}
            bg={useColorModeValue(
              'rgba(255,255,255, 0.08)',
              'rgba(255,255,255, 0.08)',
            )}
          ></IconButton>
          {status ? (
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<BsPerson />}
                variant="outline"
                mx="2"
                active={{
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
                bg={useColorModeValue(
                  'rgba(255,255,255, 0.08)',
                  'rgba(255,255,255, 0.08)',
                )}
              />
              <MenuList
                bg="rgba(19, 106, 248, 0.8)"
                boxShadow="lg"
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
              bg={useColorModeValue(
                'rgba(255,255,255, 0.08)',
                'rgba(255,255,255, 0.08)',
              )}
            ></IconButton>
          )}
        </Box>
      </Box>
      {<Aside />}
    </>
  );
};
