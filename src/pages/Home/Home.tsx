import React, { useState } from 'react';

import * as S from './style';
import SearchBar from '../../components/SearchBar';
import SaveRepo from '../../components/SaveRepo';
import RepoList from '../../components/RepoList';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export type RepoType = {
  id: number;
  fullName: string;
  open_issues: number;
  description: string;
  updated_at: string;
};

const Home = () => {
  const [repos, setRepos] = useState<RepoType[]>([]);
  const [savedRepos, setSavedRepos] = useLocalStorage('savedRepos', []);
  return (
    <S.Home>
      <SearchBar setRepos={setRepos} />
        <SaveRepo savedRepos={savedRepos} setSavedRepos={setSavedRepos} />
        <RepoList
          repos={repos}
          savedRepos={savedRepos}
          setSavedRepos={setSavedRepos}
        />
    </S.Home>
  );
};

export default Home;
