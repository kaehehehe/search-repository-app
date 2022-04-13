import React, { useState } from 'react';

import * as S from './style';
import SearchBar from '../../components/SearchBar';
import SaveRepo from '../../components/SaveRepo';
import RepoList from '../../components/RepoList';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export type RepoType = {
  id: number;
  fullName: string;
};

const Home = () => {
  const [repo, setRepo] = useState<RepoType[]>([]);
  const [savedRepos, setSavedRepos] = useLocalStorage('savedRepos', []);
  return (
    <S.Home>
      <SearchBar setRepo={setRepo} />
      <SaveRepo savedRepos={savedRepos} setSavedRepos={setSavedRepos} />
      <RepoList
        data={repo}
        savedRepos={savedRepos}
        setSavedRepos={setSavedRepos}
      />
    </S.Home>
  );
};

export default Home;
