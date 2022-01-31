import test from "ava";
import "../";

test("Array.forEachAsync", async (t) => {
  let sum = 0;
  const testArray = [1, 2, 3, 4, 5];
  await testArray.forEachAsync(async (item) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        sum += item;
        resolve();
      }, 10);
    });
  });

  t.is(15, sum);
});
