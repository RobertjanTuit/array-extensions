import test from "ava";
import "../";

test("Array.max", (t) => {
  const testArray = [1, 2, 3, 4, 5];
  const items = testArray.max((a) => a);

  t.deepEqual(items, 5);
});
