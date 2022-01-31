import test from "ava";
import "../";

test("Array.mapAsync", async (t) => {
  const testArray = [1, 2, 3, 4, 5];
  const items = await testArray.mapAsync(async (item) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(item);
      }, 10);
    });
  });

  t.deepEqual(items, testArray);
});
