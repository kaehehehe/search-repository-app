import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import * as S from './style';

type IssueType = {
  id: number;
  title: string;
};

const Issue = () => {
  const [issues, setIssues] = useState<IssueType[]>([]);
  const [currPage, setCurrPage] = useState(1);
  const { owner, name } = useParams();

  const fetchIssues = async () => {
    return await axios.get(
      `https://api.github.com/repos/${owner}/${name}/issues?page=${currPage}`
    );
  };

  useEffect(() => {
    fetchIssues()
      .then((res) => setIssues(res.data))
      .catch((res) => console.error(res));
  }, []);
  
  return (
    <S.Issue>
      {issues.map(({ id, title }) => (
        <div key={id}>
          id: {id} title{title}
        </div>
      ))}
    </S.Issue>
  );
};

export default Issue;
