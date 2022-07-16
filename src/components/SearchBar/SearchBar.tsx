import React, { useRef } from 'react';

import * as S from './style';
import { SearchBarProps } from '../../types/searchBar';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { fetchInitialRepos } from '../../features/search/searchSlice';

const SearchBar = React.memo(({ setKeyword, setSearched }: SearchBarProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const searchRepo = (e: React.KeyboardEvent) => {
    const keyword = inputRef.current!.value;
    if (e.key === 'Enter') {
      if (keyword.trim() === '') {
        return;
      } else {
        setKeyword(keyword);
        dispatch(fetchInitialRepos({ keyword }));
        setSearched(true);
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
});

export default SearchBar;
