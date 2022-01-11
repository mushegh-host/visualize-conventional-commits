import { CommitType, parseCommitType } from "./CommitType";

describe("parseCommitType", () => {
  it("should parse predefined types", () => {
    expect(parseCommitType("feat")).toBe(CommitType.Feature);
    expect(parseCommitType("fix")).toBe(CommitType.Fix);
    expect(parseCommitType("docs")).toBe(CommitType.Documentation);
    expect(parseCommitType("style")).toBe(CommitType.Style);
    expect(parseCommitType("refactor")).toBe(CommitType.Refactor);
    expect(parseCommitType("test")).toBe(CommitType.Test);
    expect(parseCommitType("chore")).toBe(CommitType.Chore);
    expect(parseCommitType("revert")).toBe(CommitType.Revert);
  });

  it("should fail if the type is not predefined", () => {
    expect(() => parseCommitType("foo")).toThrowError(
      "Unknown commit type: foo"
    );
  });

  it("should fail if " + "the type is not a string", () => {
    expect(() => parseCommitType(123)).toThrow();
  });
});
