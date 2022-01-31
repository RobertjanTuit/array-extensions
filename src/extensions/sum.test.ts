import test from "ava";
import "../";

test("Array.sum", (t) => {
  const testArray = [1, 2, 3, 4, 5];
  const sum = testArray.sum((a) => a);

  t.deepEqual(sum, 15);
});
