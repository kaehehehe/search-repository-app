import { RepoType } from "./common";

export type HomeProps = {
  savedRepos: RepoType[];
  setSavedRepos: React.Dispatch<React.SetStateAction<RepoType[]>>;
};