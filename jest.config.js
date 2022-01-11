module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
  collectCoverageFrom: ["src/**/*.ts", "!**/?(*.)+(spec|test).[jt]s?(x)"],
  moduleFileExtensions: ["js", "ts"],
  transform: {
    "\\.txt": "jest-raw-loader",
  },
};
