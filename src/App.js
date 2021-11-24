import './App.css';
import { NavBar } from './components/NavBar';
import '@fontsource/dm-sans';
import '@fontsource/inter';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes as routing } from './routes/routes';
import { AppProvider } from './context/AppContext';
import { Footer } from './components/Footer';
import { chakra } from '@chakra-ui/react';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <NavBar />
        <chakra.main id="mainApp">
          <Routes>
            {routing.map(({ path, component }, index) => (
              <Route key={index} exact path={path} element={component} />
            ))}
          </Routes>
        </chakra.main>
        <Footer />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
