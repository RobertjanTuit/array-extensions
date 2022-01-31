import test from "ava";
import "../";

test("Array.min", (t) => {
  const testArray = [1, 2, 3, 4, 5];
  const items = testArray.min((a) => a);

  t.deepEqual(items, 1);
});
