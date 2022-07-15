import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { AiFillHome as IcHome } from 'react-icons/ai';

import * as S from './style';
import IssueList from '../../components/IssueList';
import Loading from '../../components/Loading';
import { RepoType } from '../Home/Home';

export type IssueType = {
  id: number;
  updated_at: string;
  title: string;
  html_url: string;
  author: string;
  author_avatar: string;
};

type IssueProps = {
  savedRepos: RepoType[];
};

const Issue = ({ savedRepos }: IssueProps) => {
  const [issues, setIssues] = useState<IssueType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const { owner, name } = useParams();
  const navigate = useNavigate();

  const fetchIssues = async (page: number = 1) => {
    return await axios
      .get(`https://api.github.com/repos/${owner}/${name}/issues?&page=${page}`)
      .then((res) => {
        const issues = res.data;
        const result = issues.map((issue: IssueType) => {
          // @ts-ignore
          const { login, avatar_url } = issue.user;
          return {
            id: issue.id,
            updated_at: issue.updated_at,
            title: issue.title,
            html_url: issue.html_url,
            author: login,
            author_avatar: avatar_url,
          };
        });
        setIssues(result);
        setIsLoading(false);
      })
      .catch((res) => console.error(res));
  };

  useEffect(() => {
    setIsLoading(true);
    fetchIssues();
  }, []);

  const calculatePageCount = () => {
    const targetRepo = savedRepos.filter(
      (repo) => repo.full_name === `${owner}/${name}`
    );
    return Math.ceil(targetRepo[0].open_issues / 30);
  };

  const handlePaginate = (clickedPage: { selected: number }) => {
    const page = clickedPage.selected;
    setCurrentPage(page);
    setIsLoading(true);
    fetchIssues(page + 1);
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
