import { concurrentPromise } from "./concurrentPromise";

export async function forEachConcurrent<T>(
  this: T[],
  callback: (item: T, index?: number, array?: T[]) => Promise<void>,
  threadCount: number = 4,
  continueOnError: boolean = true
): Promise<void> {
  await concurrentPromise<T, void>(
    this,
    callback,
    threadCount,
    continueOnError
  );
}
