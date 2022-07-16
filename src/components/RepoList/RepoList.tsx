import { useCallback, useEffect, useRef, useState } from 'react';

import * as S from './style';
import { formatDate } from '../../utils/formatDate';
import ModalPortal from '../Modal/ModalPortal';
import Modal from '../Modal';
import { RepoType } from '../../types/common';
import { RepoListProps } from '../../types/repoList';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { fetchRepos } from '../../features/search/searchSlice';

const RepoList = ({
  keyword,
  savedRepos,
  setSavedRepos,
  searched,
}: RepoListProps) => {
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState('');
  const targetRef = useRef<HTMLLIElement>(null);
  const dispatch = useAppDispatch();
  const page = useAppSelector((state) => state.search.page);
  const repos = useAppSelector((state) => state.search.repos);

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
        setShowModal(true);
        setText('정상적으로 저장되었습니다. 😄');
        setSavedRepos([...savedRepos, targetRepo]);
      }
    } else {
      setShowModal(true);
      setText('4개 이상 저장할 수 없습니다. 😥');
    }
  };

  const callback = useCallback(
    // @ts-ignore
    ([entry]) => {
      if (entry.isIntersecting) {
        dispatch(fetchRepos({ keyword, page: page }));
      }
    },
    [targetRef.current]
  );

  useEffect(() => {
    if (!targetRef.current) return;
    // @ts-ignore
    const observer = new IntersectionObserver(callback);
    observer.observe(targetRef.current);
    return () => observer.disconnect();
  });

  return (
    <>
      <S.RepoList>
        {searched && repos.length === 0 ? (
          <S.Message>검색 결과가 없습니다.</S.Message>
        ) : (
          repos.map((repo, index) => {
            const { id, title, description, issueCnt, updatedAt } = repo;
            return (
              <S.ListItem
                key={id}
                onClick={() => handleSaveRepo(repo)}
                ref={index === repos.length - 4 ? targetRef : null}
              >
                <S.Title>{title}</S.Title>
                <S.Description>{description}</S.Description>
                <S.IssuesCount>issue 개수: {issueCnt}</S.IssuesCount>
                <S.UpdatedAt>
                  업데이트 일시: {formatDate(updatedAt)}
                </S.UpdatedAt>
              </S.ListItem>
            );
          })
        )}
      </S.RepoList>
      <ModalPortal>
        {showModal && <Modal setShowModal={setShowModal} text={text} />}
      </ModalPortal>
    </>
  );
};

export default RepoList;
