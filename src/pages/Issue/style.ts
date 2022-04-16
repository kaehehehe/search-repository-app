import styled from 'styled-components';

export const Issue = styled.div`
  max-width: 1500px;
  margin: 0 auto;
`;

export const HomeIcon = styled.svg`
  width: 30px;
  margin: 20px;
  fill: #acbac7;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const IssueTitle = styled.h1`
  text-align: center;
  font-size: 45px;
  margin: 10px 0 50px;
  color: #acbac7;
`;

export const Paginate = styled.div`
  margin: 30px 0;

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }

  .page-item,
  .page-link {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 50px;
    font-size: 25px;
    font-weight: 700;
    color: #acbac7;
    margin-right: 6px;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }

  .active {
    color: #539bf5;
  }
`;
