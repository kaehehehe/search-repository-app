import { IssueType } from './issue';

export type IssueListProps = {
  issues: IssueType[];
  repoName: string | undefined;
};
