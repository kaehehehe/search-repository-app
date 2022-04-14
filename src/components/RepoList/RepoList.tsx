import React, { useState } from 'react';

import * as S from './style';
import { RepoType } from '../../pages/Home/Home';
import { formatDate } from '../../utils/formatDate';
import ModalPortal from '../Modal/ModalPortal';
import Modal from '../Modal';

type RepoListProps = {
  repos: RepoType[];
  savedRepos: RepoType[];
  setSavedRepos: React.Dispatch<React.SetStateAction<RepoType[]>>;
  searched: boolean;
};

const RepoList = ({
  repos,
  savedRepos,
  setSavedRepos,
  searched,
}: RepoListProps) => {
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState('');

  const existsRepo = (targetRepo: RepoType) => {
    return savedRepos.find((repo) => repo.id === targetRepo.id);
  };

  const canSaveRepo = () => {
    return savedRepos.length < 4;
  };

  const handleSaveRepo = (targetRepo: RepoType) => {
    if (canSaveRepo()) {
      if (existsRepo(targetRepo)) {
        setShowModal(true);
        setText('이미 저장되어 있습니다. 😥');
      } else {
        setSavedRepos([...savedRepos, targetRepo]);
      }
    } else {
      setShowModal(true);
      setText('4개 이상 저장할 수 없습니다. 😥');
    }
  };

  return (
    <>
      <S.RepoList>
        {searched && repos.length === 0 ? (
          <S.Message>검색 결과가 없습니다.</S.Message>
        ) : (
          repos.map((repo) => (
            <S.ListItem key={repo.id} onClick={() => handleSaveRepo(repo)}>
              <S.Title>{repo.full_name}</S.Title>
              <S.Description>{repo.description}</S.Description>
              <S.IssuesCount>issue 개수 : {repo.open_issues}</S.IssuesCount>
              <S.UpdatedAt>
                마지막에 업데이트된 날짜 : {formatDate(repo.updated_at)}
              </S.UpdatedAt>
            </S.ListItem>
          ))
        )}
      </S.RepoList>
      <ModalPortal>
        {showModal && <Modal setShowModal={setShowModal} text={text} />}
      </ModalPortal>
    </>
  );
};

export default RepoList;
