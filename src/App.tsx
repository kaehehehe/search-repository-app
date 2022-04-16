import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { GlobalStyle } from './GlobalStyle';
import Home from './pages/Home';
import Issue from './pages/Issue';
import ScrollToTopBtn from './components/ScrollToTopBtn';
import { useLocalStorage } from './hooks/useLocalStorage';

const App = () => {
  const [savedRepos, setSavedRepos] = useLocalStorage('savedRepos', []);

  return (
    <>
      <GlobalStyle />
      <header>
        <h1>Search Github Repository</h1>
      </header>
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
      <ScrollToTopBtn />
    </>
  );
};

export default App;
