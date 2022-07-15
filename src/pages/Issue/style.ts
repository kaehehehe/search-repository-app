import styled from 'styled-components';

export const Issue = styled.div`
  max-width: 1500px;
  margin: 0 auto;
`;

export const IcHouse = styled.div`
  position: absolute;
  top: 20px;
  left: 30px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  .home-icon {
    width: auto;
    height: 40px;
    fill: #acbac7;
  }
`;

export const IssueTitle = styled.h3`
  text-align: center;
  font-size: 35px;
  margin: 50px 0;
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
