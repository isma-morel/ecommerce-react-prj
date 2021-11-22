import { Button, chakra, Container, Flex, Icon } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { BsBox } from 'react-icons/bs';

const options = [
  { path: 'login', text: 'Do you have an account? Login.' },
  { path: 'register', text: 'Don t have an account yet? Sign Up.' },
];
const LoginRegister = ({ path, text }) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(path);
  return (
    <>
      <Button
        my="10px"
        fontSize="24px"
        fontFamily="fonts.100"
        onClick={handleClick}
        rounded="2xl"
        minW="500px"
      >
        {text}
      </Button>
    </>
  );
};

export const CredentialsView = () => {
  return (
    <>
      <chakra.main id="mainApp" minH="100vh" w="100%" bg="brand.100">
        <Container minW="container.lg">
          <Flex
            justifyContent="center"
            minH="100vh"
            alignItems="center"
            flexDir="column"
          >
            <Icon mb="40px" color="white" as={BsBox} w={40} h={40}></Icon>
            {options.map(({ path, text }, index) => (
              <LoginRegister key={index} path={path} text={text} />
            ))}
          </Flex>
        </Container>
      </chakra.main>
    </>
  );
};
