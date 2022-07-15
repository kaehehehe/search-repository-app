import React, { useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';

import * as S from './style';
import { formatDate } from '../../utils/formatDate';
import ModalPortal from '../Modal/ModalPortal';
import Modal from '../Modal';
import { RepoType } from '../../types/common';
import { RepoListProps } from '../../types/repoList';

const RepoList = ({
  keyword,
  page,
  setPage,
  repos,
  setRepos,
  savedRepos,
  setSavedRepos,
  searched,
}: RepoListProps) => {
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState('');
  const targetRef = useRef<HTMLLIElement>(null);

  const fetchRepo = async (keyword: string, page: number = 1) => {
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
        setRepos([...repos, ...result]);
        setPage(page + 1);
      })
      .catch((res) => {
        console.error(res);
        return;
      });
  };

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
        fetchRepo(keyword, page + 1);
        setPage(page + 1);
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
          repos.map((repo, index) => (
            <S.ListItem
              key={repo.id}
              onClick={() => handleSaveRepo(repo)}
              ref={index === repos.length - 1 ? targetRef : null}
            >
              <S.Title>{repo.full_name}</S.Title>
              <S.Description>{repo.description}</S.Description>
              <S.IssuesCount>issue 개수 : {repo.open_issues}</S.IssuesCount>
              <S.UpdatedAt>
                업데이트 일시 : {formatDate(repo.updated_at)}
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
