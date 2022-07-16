import { RepoType } from './common';

export type RepoListProps = {
  keyword: string;
  savedRepos: RepoType[];
  setSavedRepos: React.Dispatch<React.SetStateAction<RepoType[]>>;
  searched: boolean;
};
