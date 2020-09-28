import { greet } from "./index";

test("return Hello WORLD or not", () => {
  expect(greet("Francis")).toBe("Hello FRANCIS!");
});
