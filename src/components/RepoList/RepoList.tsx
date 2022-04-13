import React from 'react';

import * as S from './style';
import { RepoType } from '../../pages/Home/Home';

type RepoListProps = {
  data: RepoType[];
};

const RepoList = ({ data }: RepoListProps) => {
  return (
    <ul>
      {data.length === 0 ? (
        <S.Message>검색 결과가 없습니다.</S.Message>
      ) : (
        data.map((item) => (
          <S.ListItem key={item.id}>{item.fullName}</S.ListItem>
        ))
      )}
    </ul>
  );
};

export default RepoList;
