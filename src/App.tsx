import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home/Home';
import Counter from './components/Counter';
import About from './pages/about/About';
import NotFound from './pages/notFound/NotFound';
import WarmThemeExample from './pages/WarmThemeExample/WarmThemeExample';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="counter" element={<Counter />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="warm-theme" element={<WarmThemeExample/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
