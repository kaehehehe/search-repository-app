import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

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
      <S.HomeIcon
        onClick={() => navigate('/')}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
      >
        <path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z" />
      </S.HomeIcon>
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
