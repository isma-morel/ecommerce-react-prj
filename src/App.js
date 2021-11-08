import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme/extendTheme";
import { NavBar } from "./components/NavBar";
import "@fontsource/dm-sans";
import "@fontsource/inter";
import { Carrousel } from "./container/Carrousel";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <Carrousel />
    </ChakraProvider>
  );
}

export default App;
