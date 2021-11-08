import { Box } from "@chakra-ui/react";
import { CarrouselButton } from "../components/CarrouselButton";
import { useState, useEffect } from "react";
import { CarouselItem } from "../components/CarouselItem";

export const Carrousel = () => {
  const [carousel, setCarousel] = useState(null);
  const [count, setCount] = useState(1);
  const [width, setWidth] = useState(0);

  const next = () => {
    setCount(count === 3 ? 1 : count + 1);
    console.log(count);
    setWidth(width - 33);
  };
  const translate = () => `translateX(${width}%)`;

  const previous = () => {
    setCount(count === 1 ? 3 : count - 1);
    console.log(count);
    setWidth(width + 33);
  };

  //API Rest
  useEffect(() => {
    const getData = async () => {
      await fetch("https://6186e9b4cd8530001765ac12.mockapi.io/carousel")
        .then((response) => response.json())
        .then((data) => setCarousel(data));
    };
    getData();
  }, []);

  return (
    <Box>
      <Box
        bg="brand.100"
        w="300%"
        h="448px"
        d="flex"
        alignItems="center"
        position="relative"
      >
        <CarrouselButton
          next={width === -66 ? null : next}
          previous={width === 0 ? null : previous}
        />
        <Box
          d="flex"
          w="100%"
          alignItems="center"
          position="absolute"
          bottom="0"
          flexWrap="nowrap"
          zIndex="10"
          transition=".8s all ease"
          transform={translate}
        >
          {carousel &&
            carousel.map(
              ({ id, src, text, tittle, tittleStylish, btn1, btn2 }) => (
                <CarouselItem
                  key={id}
                  src={src}
                  text={text}
                  tittle={tittle}
                  tittleStylish={tittleStylish}
                  btn1={btn1}
                  btn2={btn2}
                />
              )
            )}
        </Box>
      </Box>
    </Box>
  );
};
