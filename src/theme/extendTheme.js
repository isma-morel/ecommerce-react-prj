import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    100: "#136af8",
    200: "#081b30",
    300: "#000",
    400: "#141012",
    500: "#081b30",
    600: "#fff",
  },
};
const fonts = {
  fonts: {
    100: "DM Sans",
    200: "Inter",
  },
};
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  colors,
  fonts,
  config,
});
