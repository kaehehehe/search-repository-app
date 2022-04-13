import React from 'react';

import * as S from './style';
import { RepoType } from '../../pages/Home/Home';
import { formatDate } from '../../utils/formatDate';

type RepoListProps = {
  repos: RepoType[];
  savedRepos: RepoType[];
  setSavedRepos: React.Dispatch<React.SetStateAction<RepoType[]>>;
};

const RepoList = ({ repos, savedRepos, setSavedRepos }: RepoListProps) => {
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
      {repos.length === 0 ? (
        <S.Message>검색 결과가 없습니다.</S.Message>
      ) : (
        repos.map((repo) => (
          <S.ListItem key={repo.id} onClick={() => handleSaveRepo(repo)}>
            <S.Title>{repo.full_name}</S.Title>
            <S.Description>{repo.description}</S.Description>
            <S.IssuesCount>issue 개수 : {repo.open_issues}</S.IssuesCount>
            <S.UpdatedAt>마지막에 업데이트된 날짜 : {formatDate(repo.updated_at)}</S.UpdatedAt>
          </S.ListItem>
        ))
      )}
    </S.RepoList>
  );
};

export default RepoList;
