
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Motion from './pages/Motion';
import GalleryView from './pages/GalleryView';
import About from './pages/About';
import DetailPage from './pages/DetailPage';
import { ThemeMode } from './types';
import { ILLUSTRATIONS, PHOTOGRAPHY } from './constants';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [mode, setMode] = useState<ThemeMode>('dark');

  const toggleMode = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
      <ScrollToTop />
      <Layout mode={mode} toggleMode={toggleMode}>
        <Routes>
          <Route path="/" element={<Home mode={mode} />} />
          <Route path="/motion" element={<Motion mode={mode} />} />
          <Route 
            path="/illustration" 
            element={
              <GalleryView 
                items={ILLUSTRATIONS} 
                title="ILLUSTRATION" 
                subtitle="Expressive visual explorations through digital painting and line art." 
                mode={mode} 
              />
            } 
          />
          <Route 
            path="/photography" 
            element={
              <GalleryView 
                items={PHOTOGRAPHY} 
                title="PHOTOGRAPHY" 
                subtitle="Captured moments focusing on light, shadow, and architectural minimalism." 
                mode={mode} 
              />
            } 
          />
          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/detail/:id" element={<DetailPage mode={mode} />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
