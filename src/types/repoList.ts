import { RepoType } from './common';

export type RepoListProps = {
  keyword: string;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  repos: RepoType[];
  setRepos: React.Dispatch<React.SetStateAction<RepoType[]>>;
  savedRepos: RepoType[];
  setSavedRepos: React.Dispatch<React.SetStateAction<RepoType[]>>;
  searched: boolean;
};
