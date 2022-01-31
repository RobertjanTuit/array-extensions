import test from "ava";
import "../";

test("Array.groupBy - callback", async (t) => {
  const testArray = [1, 2, 3, 4, 10, 14, 15, 42, 65, 69, 95];
  const resultArray = testArray.groupBy((item) =>
    Math.floor(item / 10).toString()
  );
  t.deepEqual(resultArray, {
    "0": [1, 2, 3, 4],
    "1": [10, 14, 15],
    "4": [42],
    "6": [65, 69],
    "9": [95],
  });
});

test("Array.groupBy - prop", async (t) => {
  const testArray = [
    { id: 1, group: "A" },
    { id: 2, group: "B" },
    { id: 3, group: "A" },
    { id: 4, group: "B" },
    { id: 10, group: "C" },
  ];
  const resultArray = testArray.groupBy("group");
  t.deepEqual(resultArray, {
    A: [
      { id: 1, group: "A" },
      { id: 3, group: "A" },
    ],
    B: [
      { id: 2, group: "B" },
      { id: 4, group: "B" },
    ],
    C: [{ id: 10, group: "C" }],
  });
});
