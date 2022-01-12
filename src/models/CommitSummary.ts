import { CommitType } from "./CommitType";

export type CommitSummary = {
  type: CommitType;
  scope?: string;
  subject: string;
};
