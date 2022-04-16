import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { GlobalStyle } from './GlobalStyle';
import Home from './pages/Home';
import Issue from './pages/Issue';
import { useLocalStorage } from './hooks/useLocalStorage';

const App = () => {
  const [savedRepos, setSavedRepos] = useLocalStorage('savedRepos', []);
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home savedRepos={savedRepos} setSavedRepos={setSavedRepos} />
            }
          />
          <Route
            path="/issue/:owner/:name"
            element={<Issue savedRepos={savedRepos} />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
