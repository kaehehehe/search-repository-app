import * as S from './style';
import { formatDate } from '../../utils/formatDate';
import { IssueListProps } from '../../types/issueList';

const IssueList = ({ issues, repoName }: IssueListProps) => {
  return (
    <S.IssueList>
      {issues.length === 0 ? (
        <S.NoIssue>issue가 없습니다.</S.NoIssue>
      ) : (
        issues.map(
          ({ id, updatedAt, title, issuePageURL, author, avatarImgSrc }) => (
            <S.IssueCard key={id} href={issuePageURL} target="_blank">
              <S.CardTitleAndRepoName>
                <span>{repoName}</span>
                <h3>{title}</h3>
              </S.CardTitleAndRepoName>
              <S.AuthorData>
                <img src={avatarImgSrc} alt="이슈를 만든 사람의 사진" />
                <span>{author}</span>
              </S.AuthorData>
              <S.UpdatedAt>업데이트 일시 : {formatDate(updatedAt)}</S.UpdatedAt>
            </S.IssueCard>
          )
        )
      )}
    </S.IssueList>
  );
};

export default IssueList;
