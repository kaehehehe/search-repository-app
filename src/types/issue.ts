import { RepoType } from './common';

export type IssueType = {
  id: number;
  updatedAt: string;
  title: string;
  issuePageURL: string;
  author: string;
  avatarImgSrc: string;
};

export type ResponseIssue = {
  id: number;
  updated_at: string;
  title: string;
  html_url: string;
  user: {
    login: string;
    avatar_url: string;
  };
};

export type IssueProps = {
  savedRepos: RepoType[];
};
