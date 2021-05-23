import {
  assertEquals,
  assertArrayContains,
} from "https://deno.land/std@0.65.0/testing/asserts.ts";

Deno.test("hello world", () => {
  const x = 1 + 2;
  assertEquals(x, 3);
  assertArrayContains([1, 2, 3, 4, 5, 6], [3], "Expected 3 to be in the array");
});
