import { defaultContinueOnError, defaultThreadCount } from ".";
import { concurrentPromise } from "./concurrentPromise";

export async function forEachConcurrent<T>(
  this: T[],
  callback: (item: T, index?: number, array?: T[]) => Promise<void>,
  threadCount: number = defaultThreadCount,
  continueOnError: boolean = defaultContinueOnError
): Promise<void> {
  await concurrentPromise<T, void>(
    this,
    callback,
    threadCount,
    continueOnError
  );
}
