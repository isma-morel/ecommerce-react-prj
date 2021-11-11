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

// //Custom Components
// const Card = {
//   // The styles all Cards have in common
//   baseStyle: {
//     display: "flex",
//     flexDirection: "column",
//     background: "white",
//     alignItems: "center",
//     gap: 6,
//   },
//   // Two variants: rounded and smooth
//   variants: {
//     rounded: {
//       padding: 8,
//       borderRadius: "xl",
//       boxShadow: "xl",
//     },
//     smooth: {
//       padding: 6,
//       borderRadius: "base",
//       boxShadow: "md",
//     },
//   },
//   // The default variant value
//   defaultProps: {
//     variant: "smooth",
//   },
// };

// const Navbar = {
//   baseStyle: {
//     display: "flex",
//     alignItems: "center",
//     color: "brand.600",
//     fontFamily: "fonts.100",
//     position: "relative",
//     top: "0",
//     zIndex: "9999",
//     width: "100%",
//   },
//   variants: {
//     ligth: {
//       color: "brand.600",
//       backgroundColor: "brand.100",
//     },
//     dark: {
//       color: "brand.600",
//       backgroundColor: "brand.900",
//     },
//   },
//   defaultProps: {
//     variant: "ligth",
//   },
// };

export const theme = extendTheme({
  colors,
  fonts,
});
