import test from "ava";
import "../";

test("Array.forEachAsyncConcurrent", async (t) => {
  const testArray = [1, 2, 3, 4, 5];
  const resultArray: number[] = [];
  const running: number[] = [];
  await testArray.forEachAsyncConcurrent(async (item) => {
    running.push(item);
    t.assert(running.length <= 2, "Never more then the {x} concurrent");
    if (item > 1 && item < 5) {
      t.assert(
        running.length === 2,
        "Expected 2 running at item all time except for 1 and 5"
      );
    }
    // eslint-disable-next-line no-async-promise-executor
    await new Promise<void>(async (resolve) => {
      setTimeout(() => {
        running.splice(running.indexOf(item), 1);
        resultArray.push(item);
        resolve();
      }, 100 / item);
    });
  }, 2);

  t.deepEqual(resultArray, [2, 3, 1, 4, 5]); // Results based on concurrent and dividing timeout time.
});
