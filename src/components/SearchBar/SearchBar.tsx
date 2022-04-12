import React from 'react';

import * as S from './style';

const SearchBar = () => {
  return (
    <S.SearchBar>
      <span>🔍 Github 리포지토리를 검색할 수 있습니다.</span>
      <input type='search' placeholder='키워드를 입력해주세요' />
    </S.SearchBar>
  );
};

export default SearchBar;
