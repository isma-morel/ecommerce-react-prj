import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  useToast,
  Icon,
} from '@chakra-ui/react';
import { Link as CustomLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { BsEyeSlash, BsEye } from 'react-icons/bs';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';
import { useApp } from '../context/AppContext';
const symbolRegx = /[,.-:;]/gi;
const numberRegx = /[0-9]/gi;

export const RegisterView = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  });
  const toast = useToast();
  const navigate = useNavigate();
  const { setStatus } = useApp();

  const handlerFirstName = ({ target }) => {
    let { value } = target;
    value = value.trim().replace(symbolRegx, '');
    value = value.replace(numberRegx, '');
    target.value = value;
    setCredentials({
      ...credentials,
      firstName: value,
    });
    console.log(credentials);
  };
  const handleLastName = ({ target }) => {
    let { value } = target;
    value = value.trim().replace(symbolRegx, '');
    value = value.replace(numberRegx, '');
    target.value = value;
    setCredentials({
      ...credentials,
      lastName: value,
    });
    console.log(credentials);
  };
  const handleEmail = ({ target }) => {
    let { value } = target;
    const emailRegx =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (value.match(emailRegx)) {
      setCredentials({
        ...credentials,
        email: value,
      });
    } else {
      setCredentials({
        ...credentials,
        email: '',
      });
    }
  };

  const handlePassword = ({ target }) => {
    let { value } = target;
    if (value.match(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/)) {
      setCredentials({
        ...credentials,
        password: value,
      });
    } else {
      setCredentials({
        ...credentials,
        password: '',
      });
    }
  };
  const handleClickRegister = async () => {
    const { firstName, lastName, email, password } = credentials;
    if ((firstName, lastName, email, password === '')) {
      toast({
        title: 'Credentials Error',
        status: 'error',
        duration: 1000,
        isClosable: true,
      });
    } else {
      await createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
          //Signed in
          setStatus(true);
          console.log(user);
          updateProfile(user.user, {
            displayName: `${firstName} ${lastName}`,
          })
            .then(() => console.log('update!'))
            .catch((err) => console.log(err));
          toast({
            title: 'Successful Registration and Logged',
            status: 'success',
            duration: 1500,
            isClosable: true,
          });
          navigate('/');
        })
        .catch((error) => {
          let errMsg = error.message.replace('Firebase:', '');
          errMsg = errMsg.replace('auth/', '');
          toast({
            title: `${errMsg}`,
            status: 'error',
            duration: 1000,
            isClosable: true,
          });
        });
    }
  };
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      pt="20px"
      bg={useColorModeValue('brand.100', 'brand.100')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Heading color="white" fontSize={'4xl'} textAlign={'center'}>
          Password Requirements
        </Heading>
        <Text color="white" fontSize={'2xl'} textAlign={'center'}>
          The password must be between 8 and 16 characters, at least one digit,
          at least one lower case and at least one upper case. CANT have other
          symbols.
        </Text>
      </Stack>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading color="white" fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'white')}
          boxShadow={'lg'}
          p={8}
          color="black"
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    bg="gray.100"
                    borderColor="gray.300"
                    _placeholder={{ color: 'black' }}
                    onChange={handlerFirstName}
                    type="text"
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName" isRequired>
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    bg="gray.100"
                    borderColor="gray.300"
                    _placeholder={{ color: 'black' }}
                    onChange={handleLastName}
                    type="text"
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                bg="gray.100"
                borderColor="gray.300"
                _placeholder={{ color: 'black' }}
                type="email"
                onChange={handleEmail}
              />
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  bg="gray.100"
                  borderColor="gray.300"
                  _placeholder={{ color: 'black' }}
                  onChange={handlePassword}
                  type={showPassword ? 'text' : 'password'}
                />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    color="black"
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                    borderColor="gray.200"
                    fontSize="20px"
                  >
                    <Icon as={showPassword ? BsEye : BsEyeSlash} />
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _active={{ bg: 'blue.600' }}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleClickRegister}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user?{' '}
                <Link as={CustomLink} to={'/auth/login'} color={'blue.400'}>
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
