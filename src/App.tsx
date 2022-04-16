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
        <p>
          github repository를 검색할 수 있으며 관심이 있는 repository를 최대
          4개까지 저장할 수 있습니다.
          <br />
          또한 저장된 repository에서는 issue를 확인할 수 있습니다.
        </p>
      </header>
      <Router basename={process.env.PUBLIC_URL}>
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
