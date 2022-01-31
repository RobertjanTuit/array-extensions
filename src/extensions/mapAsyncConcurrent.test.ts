import test from "ava";
import "../";

test("Array.mapAsyncConcurrent", async (t) => {
  const testArray = [1, 2, 3, 4, 5];
  const resultArray: number[] = [];
  const items = await testArray.mapAsyncConcurrent(async (item) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resultArray.push(item);
        resolve(item + 10);
      }, 100 / item);
    });
  }, 2);

  t.deepEqual(resultArray, [2, 3, 1, 4, 5]);
  t.deepEqual(items, [11, 12, 13, 14, 15]);
});
