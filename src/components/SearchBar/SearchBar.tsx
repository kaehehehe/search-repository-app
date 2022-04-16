import React, { useRef } from 'react';
import axios from 'axios';

import * as S from './style';
import { RepoType } from '../../pages/Home/Home';

type SearchBarProps = {
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setRepos: React.Dispatch<React.SetStateAction<RepoType[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setSearched: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchBar = ({
  setKeyword,
  page,
  setPage,
  setRepos,
  setIsLoading,
  setSearched,
}: SearchBarProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const fetchRepo = async (keyword: string) => {
    return await axios.get(
      `https://api.github.com/search/repositories?q=${keyword}&page=${page}`
    );
  };

  const searchRepo = (e: React.KeyboardEvent) => {
    const keyword = inputRef.current!.value;
    if (e.key === 'Enter') {
      if (keyword.trim() === '') {
        return;
      } else {
        setIsLoading(true);
        setKeyword(keyword);
        fetchRepo(keyword)
          .then((res) => {
            const data = res.data.items;
            const result = data.map((repo: RepoType) => {
              return {
                id: repo.id,
                full_name: repo.full_name,
                open_issues: repo.open_issues,
                description: repo.description,
                updated_at: repo.updated_at,
              };
            });
            setIsLoading(false);
            setSearched(true);
            setRepos(result);
            setPage(page + 1);
          })
          .catch((res) => console.error(res));
      }
    }
  };
  return (
    <S.SearchBar>
      <span>🔍 Github 리포지토리를 검색할 수 있습니다.</span>
      <input
        type="search"
        ref={inputRef}
        placeholder="키워드를 입력해주세요"
        onKeyUp={searchRepo}
      />
    </S.SearchBar>
  );
};

export default SearchBar;
