import './App.css';
import { NavBar } from './components/NavBar';
import '@fontsource/dm-sans';
import '@fontsource/inter';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes as routing } from './routes/routes';
import { AppProvider } from './context/AppContext';
import { Footer } from './components/Footer';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {routing.map(({ path, component }, index) => (
            <Route key={index} exact path={path} element={component} />
          ))}
        </Routes>
        <Footer />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
