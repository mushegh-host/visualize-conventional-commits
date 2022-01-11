export enum CommitType {
  Fix = "fix",
  Feature = "feat",
  Chore = "chore",
  Style = "style",
  Test = "test",
  Refactor = "refactor",
  Documentation = "docs",
  Integration = "ci",
  Revert = "revert",
}

export const parseCommitType = (input: unknown): CommitType => {
  if (typeof input !== "string") {
    throw new Error(`Expected string, got ${typeof input}`);
  }

  switch (input) {
    case "fix":
      return CommitType.Fix;
    case "feat":
      return CommitType.Feature;
    case "chore":
      return CommitType.Chore;
    case "style":
      return CommitType.Style;
    case "test":
      return CommitType.Test;
    case "refactor":
      return CommitType.Refactor;
    case "docs":
      return CommitType.Documentation;
    case "ci":
      return CommitType.Integration;
    case "revert":
      return CommitType.Revert;
    default:
      throw new Error(`Unknown commit type: ${input}`);
  }
};
