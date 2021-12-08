import './App.css';
import { NavBar } from './components/NavBar';
import '@fontsource/dm-sans';
import '@fontsource/inter';
import { Routes, Route, Navigate } from 'react-router-dom';
import { routes as routing } from './routes/routes';
import { Footer } from './components/Footer';
import { chakra } from '@chakra-ui/react';
import { privateRoutes } from './routes/privateRoutes';
import { credentialsRoutes } from './routes/credentialsRoutes';
import { useApp } from './context/AppContext';

function App() {
  const { status } = useApp();
  return (
    <>
      <NavBar />
      <chakra.main id="mainApp">
        <Routes>
          {routing.map(({ path, component }, index) => (
            <Route key={index} exact path={path} element={component} />
          ))}
          {credentialsRoutes.map(({ path, component }, index) => (
            <Route
              key={index}
              exact
              path={path}
              element={!status ? component : <Navigate to={'/'} />}
            />
          ))}
          {privateRoutes.map(({ path, component }, index) => (
            <Route
              key={index}
              exact
              path={path}
              element={status ? component : <Navigate to={'/auth/login'} />}
            />
          ))}
        </Routes>
      </chakra.main>
      <Footer />
    </>
  );
}

export default App;
