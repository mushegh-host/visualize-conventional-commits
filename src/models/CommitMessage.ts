import { CommitType } from "./CommitType";

export type CommitMessage = {
  type: CommitType;
  scope?: string;
  subject: string;
  body?: string;
};
