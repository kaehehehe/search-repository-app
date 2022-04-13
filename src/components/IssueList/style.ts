import styled from 'styled-components';

export const IssueList = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
`;

export const NoIssue = styled.div`
  font-size: 2.5rem;
  color: #acbac7;
  text-align: center;
`;

export const IssueCard = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 400px;
  margin: 10px;
  border: 1px solid #363e47;
  border-radius: 7px;
  padding: 15px;
  transition: all 250ms linear;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardTitleAndRepoName = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  h3 {
    font-size: 1.8rem;
    color: #539bf5;
  }

  span {
    color: #acbac7;
    font-size: 1.6rem;
    margin-bottom: 8px;
  }
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const AuthorData = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  img {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }

  span {
    color: #acbac7;
    font-size: 1.6rem;
  }
`;

export const UpdatedAt = styled.div`
  font-size: 1.4rem;
  color: #acbac7;
`;
