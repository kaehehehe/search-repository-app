import * as S from './style';
import { IssueType } from '../../pages/Issue/Issue';
import { formatDate } from '../../utils/formatDate';

type IssueListProps = {
  issues: IssueType[];
  repoName: string | undefined;
};

const IssueList = ({ issues, repoName }: IssueListProps) => {
  return (
    <S.IssueList>
      {issues.length === 0 ? (
        <S.NoIssue>issue가 없습니다</S.NoIssue>
      ) : (
        issues.map(
          ({ id, title, updated_at, html_url, author, author_avatar }) => (
            <S.IssueCard key={id} href={html_url} target="_blank">
              <S.CardTitleAndRepoName>
                <span>{repoName}</span>
                <h3>{title}</h3>
              </S.CardTitleAndRepoName>
              <S.AuthorData>
                <img src={author_avatar} alt="이슈를 만든 사람의 사진" />
                <span>{author}</span>
              </S.AuthorData>
              <S.UpdatedAt>업데이트 일시 : {formatDate(updated_at)}</S.UpdatedAt>
            </S.IssueCard>
          )
        )
      )}
    </S.IssueList>
  );
};

export default IssueList;
