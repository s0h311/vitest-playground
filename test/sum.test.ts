import { expect, it } from "vitest";
import Sum from "../src/sum";

it("", () => {
  const sum = new Sum();

  const expected = sum.do(1, 2);
  expect(expected).toBe(3);
});
