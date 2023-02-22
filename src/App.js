import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Housing from './pages/Housing';
import About from './pages/About';
import Error404 from './pages/Error404';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/housing' element={<Housing />} />
      <Route path='/about' element={<About />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
