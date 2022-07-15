import React, { useRef } from 'react';
import axios from 'axios';

import * as S from './style';
import { SearchBarProps } from '../../types/searchBar';
import { RepoType } from '../../types/common';

const SearchBar = React.memo(
  ({
    setKeyword,
    page,
    setPage,
    setRepos,
    setIsLoading,
    setSearched,
  }: SearchBarProps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const fetchRepo = async (keyword: string) => {
      return await axios
        .get(
          `https://api.github.com/search/repositories?q=${keyword}&page=${page}`
        )
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
    };

    const searchRepo = (e: React.KeyboardEvent) => {
      const keyword = inputRef.current!.value;
      if (e.key === 'Enter') {
        if (keyword.trim() === '') {
          return;
        } else {
          setIsLoading(true);
          setKeyword(keyword);
          fetchRepo(keyword);
        }
      }
    };
    return (
      <S.SearchBar>
        <input
          type="search"
          ref={inputRef}
          placeholder="키워드를 입력해주세요"
          onKeyUp={searchRepo}
        />
      </S.SearchBar>
    );
  }
);

export default SearchBar;
