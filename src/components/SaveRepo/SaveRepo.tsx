import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTrashAlt as IcDelete } from 'react-icons/fa';

import * as S from './style';
import { SaveRepoProps } from '../../types/saveRepo';

const SaveRepo = React.memo(({ savedRepos, setSavedRepos }: SaveRepoProps) => {
  const navigate = useNavigate();

  const handleDeleteBtn = (id: number) => {
    const result = savedRepos.filter((repo) => repo.id !== id);
    setSavedRepos(result);
  };

  return (
    <S.SaveRepo>
      <S.List>
        {savedRepos.length === 0 ? (
          <S.Message>저장된 repository는 없습니다.</S.Message>
        ) : (
          savedRepos.map(({ id, full_name }) => (
            <S.ListItem key={id}>
              <S.Wrapper>
                <S.RepoName onClick={() => navigate(`/issue/${full_name}`)}>
                  {full_name}
                </S.RepoName>
                <S.IcDelete onClick={() => handleDeleteBtn(id)}>
                  <IcDelete className="delete-icon" />
                </S.IcDelete>
              </S.Wrapper>
            </S.ListItem>
          ))
        )}
      </S.List>
    </S.SaveRepo>
  );
});

export default SaveRepo;
