import { Carrousel } from "../container/Carrousel";
import { Products } from "../components/Products";
import { Box, Heading, chakra, Text, Grid, Container } from "@chakra-ui/react";
import { useApp } from "../context/AppContext";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export const Home = () => {
  const [listShow, setListShow] = useState(null);
  const { products } = useApp();
  useEffect(() => {
    products && setListShow(products.filter(({ id }) => id < 7));
  }, [products]);
  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    };
    getData();
  }, []);

  return (
    <chakra.main id="mainApp">
      <Carrousel />
      <Box bgColor="white">
        <Box textAlign="start" px="10%" pt="90px" pb="50px">
          <Heading fontSize="50px" color="brand.300" mb="20px">
            Our <chakra.span color="brand.100">Products</chakra.span>
          </Heading>
          <Text color="brand.300" fontSize="1.1rem">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            randomised words which don't look even slightly believable
          </Text>
        </Box>
        <Box w="100%" h="100%" bgColor="brand.100" overflow="hidden">
          <Container minW="container.lg">
            <Grid
              gridRowGap={4}
              bgColor="brand.100"
              templateColumns="repeat(3, 1fr)"
              gap={4}
              py="30px"
              px="2%"
              w="100%"
            >
              {listShow &&
                listShow.map(({ name, src, price, id, isNew }) => (
                  <Products
                    key={id}
                    name={name}
                    src={src}
                    price={price}
                    isNew={isNew}
                    id={id}
                  />
                ))}
            </Grid>
          </Container>
        </Box>
      </Box>
    </chakra.main>
  );
};
