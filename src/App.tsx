import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { GlobalStyle } from './GlobalStyle';
import Home from './pages/Home';
import Issue from './pages/Issue';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/issue" element={<Issue />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
