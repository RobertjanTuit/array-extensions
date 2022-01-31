import { defaultContinueOnError, defaultThreadCount } from ".";
import { concurrentPromise } from "./concurrentPromise";

export async function mapConcurrent<T, TT>(
  this: T[],
  callback: (item: T, index?: number, array?: T[]) => Promise<TT>,
  threadCount: number = defaultThreadCount,
  continueOnError = defaultContinueOnError
): Promise<TT[]> {
  return await concurrentPromise<T, TT>(
    this,
    callback,
    threadCount,
    continueOnError
  );
}
