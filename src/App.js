import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme/extendTheme";
import { NavBar } from "./components/NavBar";
import "@fontsource/dm-sans";
import "@fontsource/inter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes as routing } from "./routes/routes";
import { ProductProvider } from "./context/ProductsContext";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ProductProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            {routing.map(({ path, component }, index) => (
              <Route key={index} exact path={path} element={component} />
            ))}
          </Routes>
        </BrowserRouter>
      </ProductProvider>
    </ChakraProvider>
  );
}

export default App;
