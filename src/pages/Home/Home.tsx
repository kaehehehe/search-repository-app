import React, { useState } from 'react';

import * as S from './style';
import SearchBar from '../../components/SearchBar';

import RepoList from '../../components/RepoList';

export type RepoType = {
  id: number;
  fullName: string;
};

const Home = () => {
  const [repo, setRepo] = useState<RepoType[]>([]);
  return (
    <S.Home>
      <SearchBar setRepo={setRepo} />
      <RepoList data={repo} />
    </S.Home>
  );
};

export default Home;
