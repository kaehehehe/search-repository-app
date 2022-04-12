import React from 'react';

import { RepoType } from '../../pages/Home/Home';

type RepoListProps = {
  data: RepoType[];
};

const RepoList = ({ data }: RepoListProps) => {
  return (
    <ul>
      {data.map((item) => (
        <div key={item.id}>{item.fullName}</div>
      ))}
    </ul>
  );
};

export default RepoList;
