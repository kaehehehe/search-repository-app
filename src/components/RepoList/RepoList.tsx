import React from 'react';

import * as S from './style';
import { RepoType } from '../../pages/Home/Home';

type RepoListProps = {
  data: RepoType[];
  savedRepos: RepoType[];
  setSavedRepos: React.Dispatch<React.SetStateAction<RepoType[]>>;
};

const RepoList = ({ data, savedRepos, setSavedRepos }: RepoListProps) => {
  const existsRepo = (targetRepo: RepoType) => {
    return savedRepos.find((repo) => repo.id === targetRepo.id);
  };

  const canSaveRepo = () => {
    return savedRepos.length < 4;
  };
  const handleSaveRepo = (targetRepo: RepoType) => {
    if (canSaveRepo()) {
      if (existsRepo(targetRepo)) {
        alert('이미 등록이 되어 있습니다');
      } else {
        setSavedRepos([...savedRepos, targetRepo]);
      }
    } else {
      alert('리포지토리는 최대 4개까지 저장할 수 있습니다.');
    }
  };
  return (
    <S.RepoList>
      {data.length === 0 ? (
        <S.Message>검색 결과가 없습니다.</S.Message>
      ) : (
        data.map((item) => (
          <S.ListItem key={item.id} onClick={() => handleSaveRepo(item)}>
            {item.fullName}
          </S.ListItem>
        ))
      )}
    </S.RepoList>
  );
};

export default RepoList;
