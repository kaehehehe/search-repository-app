import React, { useState } from 'react';

import * as S from './style';
import SearchBar from '../../components/SearchBar';
import SaveRepo from '../../components/SaveRepo';
import RepoList from '../../components/RepoList';
import Loading from '../../components/Loading';

export type RepoType = {
  id: number;
  full_name: string;
  open_issues: number;
  description: string;
  updated_at: string;
};

type HomeProps = {
  savedRepos: RepoType[];
  setSavedRepos: React.Dispatch<React.SetStateAction<RepoType[]>>;
};

const Home = ({ savedRepos, setSavedRepos }: HomeProps) => {
  const [repos, setRepos] = useState<RepoType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState('');

  return (
    <S.Home>
      <SearchBar
        setKeyword={setKeyword}
        page={page}
        setPage={setPage}
        setRepos={setRepos}
        setIsLoading={setIsLoading}
        setSearched={setSearched}
      />
      <SaveRepo savedRepos={savedRepos} setSavedRepos={setSavedRepos} />
      {isLoading ? (
        <Loading />
      ) : (
        <RepoList
          keyword={keyword}
          page={page}
          setPage={setPage}
          repos={repos}
          setRepos={setRepos}
          savedRepos={savedRepos}
          setSavedRepos={setSavedRepos}
          searched={searched}
        />
      )}
    </S.Home>
  );
};

export default Home;
