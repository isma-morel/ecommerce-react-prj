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
} from '@chakra-ui/react';

export const LoginView = () => {
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
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                bg="gray.100"
                borderColor="gray.300"
                type="password"
                placeholder="password"
                _placeholder={{ color: 'black' }}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              >
                <Checkbox borderColor="gray.300" iconColor="green">
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
