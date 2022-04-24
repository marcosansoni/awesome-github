import { withCustomClassNames } from "./style";

describe("withCustomClassNames", () => {
  const cases: unknown[] = [
    ["test", "test", undefined],
    ["test custom", "test", "custom"],
    ["", "", ""],
    ["custom", "", "custom"],
  ];

  test.each(cases)("case %#", (expected, defaultClass, customClass) => {
    expect(
      withCustomClassNames(
        defaultClass as string,
        customClass as string | undefined
      )
    ).toEqual(expected);
  });
});
