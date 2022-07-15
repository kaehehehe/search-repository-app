import { RepoType } from './common';

export type SearchBarProps = {
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setRepos: React.Dispatch<React.SetStateAction<RepoType[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setSearched: React.Dispatch<React.SetStateAction<boolean>>;
};
