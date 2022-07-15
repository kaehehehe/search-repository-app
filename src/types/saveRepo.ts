import { RepoType } from './common';

export type SaveRepoProps = {
  savedRepos: RepoType[];
  setSavedRepos: React.Dispatch<React.SetStateAction<RepoType[]>>;
};
