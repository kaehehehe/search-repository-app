import { RepoType } from './common';

export type IssueType = {
  id: number;
  updated_at: string;
  title: string;
  html_url: string;
  author: string;
  author_avatar: string;
};

export type IssueProps = {
  savedRepos: RepoType[];
};
