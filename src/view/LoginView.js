import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  useColorModeValue,
  useToast,
  InputRightElement,
  InputGroup,
} from '@chakra-ui/react';

import { useState } from 'react';
import { auth } from '../firebase/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useApp } from '../context/AppContext';

export const LoginView = () => {
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const { setStatus } = useApp();
  const toast = useToast();
  const handleEmail = ({ target }) => {
    const { value } = target;
    setCredentials({ ...credentials, email: value });
  };
  const handlePassword = ({ target }) => {
    const { value } = target;
    setCredentials({
      ...credentials,
      password: value,
    });
  };
  const navigate = useNavigate();
  const handleLogin = () => {
    const { email, password } = credentials;
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setStatus(true);
        navigate('/');
        toast({
          title: 'Successful Log In',
          status: 'success',
          duration: 1000,
          isClosable: true,
        });
      })
      .catch((err) => {
        let errMsg = err.message.replace('Firebase:', '');
        errMsg = errMsg.replace('auth/', '');
        toast({
          title: `${errMsg}`,
          status: 'error',
          duration: 1000,
          isClosable: true,
        });
      });
  };
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('brand.100', 'brand.100')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading color="white" fontSize={'4xl'}>
            Sign in to your account
          </Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'white')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4} color={useColorModeValue('black', 'black')}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                bg="gray.100"
                borderColor="gray.300"
                placeholder="email"
                _placeholder={{ color: 'black' }}
                type="email"
                onChange={handleEmail}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  bg="gray.100"
                  borderColor="gray.300"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="password"
                  onChange={handlePassword}
                  _placeholder={{ color: 'black' }}
                />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    color="black"
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              >
                <Checkbox
                  colorScheme="twitter"
                  borderColor="gray.300"
                  iconColor="green.200"
                  onClick={() => setRemember(!remember)}
                >
                  Remember me
                </Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _active={{ bg: 'blue.600' }}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleLogin}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
