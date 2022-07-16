import { useState } from 'react';

import * as S from './style';
import SearchBar from '../../components/SearchBar';
import SaveRepo from '../../components/SaveRepo';
import RepoList from '../../components/RepoList';
import Loading from '../../components/Loading';
import { HomeProps } from '../../types/home';
import { useAppSelector } from '../../hooks/useAppSelector';

const Home = ({ savedRepos, setSavedRepos }: HomeProps) => {
  const [searched, setSearched] = useState(false);
  const [keyword, setKeyword] = useState('');
  const isLoading = useAppSelector((state) => state.search.isLoading);

  return (
    <S.Home>
      <SearchBar setKeyword={setKeyword} setSearched={setSearched} />
      <SaveRepo savedRepos={savedRepos} setSavedRepos={setSavedRepos} />
      {isLoading ? (
        <Loading />
      ) : (
        <RepoList
          keyword={keyword}
          savedRepos={savedRepos}
          setSavedRepos={setSavedRepos}
          searched={searched}
        />
      )}
    </S.Home>
  );
};

export default Home;
