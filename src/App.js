import './App.css';
import { NavBar } from './components/NavBar';
import '@fontsource/dm-sans';
import '@fontsource/inter';
import { Routes, Route } from 'react-router-dom';
import { routes as routing } from './routes/routes';
import { Footer } from './components/Footer';
import { chakra, useColorMode } from '@chakra-ui/react';
import { privateRoutes } from './routes/privateRoutes';
import { credentialsRoutes } from './routes/credentialsRoutes';
import { useEffect } from 'react';
// import { useApp } from './context/AppContext'; Navigate

function App() {
  const { setColorMode } = useColorMode();
  useEffect(() => {
    setColorMode('light');
  }, []);
  return (
    <>
      <NavBar />
      <chakra.main id="mainApp">
        <Routes>
          {routing.map(({ path, component }, index) => (
            <Route key={index} exact path={path} element={component} />
          ))}
          {credentialsRoutes.map(({ path, component }, index) => (
            <Route key={index} exact path={path} element={component} />
          ))}
          {privateRoutes.map(({ path, component }, index) => (
            <Route key={index} exact path={path} element={component} />
          ))}
        </Routes>
      </chakra.main>
      <Footer />
    </>
  );
}

export default App;
