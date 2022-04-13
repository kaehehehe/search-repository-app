import React from 'react';

import * as S from './style';
import { RepoType } from '../../pages/Home/Home';

type SaveRepoProps = {
  savedRepos: RepoType[];
};
const SaveRepo = ({ savedRepos }: SaveRepoProps) => {
  return (
    <S.SaveRepo>
      <h3>최대 4개까지 리포지토리를 저장할 수 있습니다</h3>
      <ul>
        {savedRepos.length === 0 ? (
          <li>저장된 리포지토리가 없습니다</li>
        ) : (
          savedRepos.map((repo) => <li key={repo.id}>{repo.fullName}</li>)
        )}
      </ul>
    </S.SaveRepo>
  );
};

export default SaveRepo;
