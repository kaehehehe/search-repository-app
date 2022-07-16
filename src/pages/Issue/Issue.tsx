import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { AiFillHome as IcHome } from 'react-icons/ai';

import * as S from './style';
import IssueList from '../../components/IssueList';
import Loading from '../../components/Loading';
import { IssueProps } from '../../types/issue';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { fetchIssues } from '../../features/issue/issueSlice';

const Issue = ({ savedRepos }: IssueProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const { owner, name } = useParams<{ owner: string | undefined; name: string | undefined; }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.issue.isLoading);
  const issues = useAppSelector((state) => state.issue.issues);

  useEffect(() => {
    dispatch(fetchIssues({ owner, name, page: 1 }));
  }, []);

  const calculatePageCount = () => {
    const targetRepo = savedRepos.filter(
      (repo) => repo.title === `${owner}/${name}`
    );
    return Math.ceil(targetRepo[0].issueCnt / 30);
  };

  const handlePaginate = (clickedPage: { selected: number }) => {
    const page = clickedPage.selected;
    setCurrentPage(page);
    dispatch(fetchIssues({ owner, name, page: page + 1 }));
  };

  return (
    <S.Issue>
      <S.IcHouse onClick={() => navigate('/')}>
        <IcHome className="home-icon" />
      </S.IcHouse>
      <S.IssueTitle>{`${owner}/${name}`} ISSUES</S.IssueTitle>
      {isLoading ? <Loading /> : <IssueList issues={issues} repoName={name} />}
      {!isLoading && issues.length !== 0 && (
        <S.Paginate>
          <ReactPaginate
            forcePage={currentPage}
            pageCount={calculatePageCount()}
            onPageChange={handlePaginate}
            marginPagesDisplayed={4}
            previousLabel="<"
            nextLabel=">"
            breakLabel="..."
            containerClassName="pagination justify-center"
            pageClassName="page-item"
            activeClassName="active"
            activeLinkClassName="active"
            previousClassName="page-item"
            nextClassName="page-item"
            disabledClassName="disabled-button d-none"
            breakClassName="page-item"
            breakLinkClassName="page-link"
          />
        </S.Paginate>
      )}
    </S.Issue>
  );
};

export default Issue;
