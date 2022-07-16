export type RepoType = {
  id: number;
  title: string;
  issueCnt: number;
  description: string;
  updatedAt: string;
};

export type ResponseRepo = {
  id: number;
  full_name: string;
  open_issues: number;
  description: string;
  updated_at: string;
};
