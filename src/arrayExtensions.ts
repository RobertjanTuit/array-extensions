/* eslint-disable no-async-promise-executor */
/* eslint-disable no-extend-native */
import * as extensions from "./extensions/";
export {}; // export this so all people have to do is: import "async-extensions"

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Array<T> {
    forEachAsync(
      this: T[],
      callback: (item: T, index?: number, array?: T[]) => Promise<void>
    ): Promise<void>;
    forEachAsyncConcurrent(
      this: T[],
      callback: (item: T, index?: number, array?: T[]) => Promise<void>,
      threadCount?: number,
      continueOnError?: boolean
    ): Promise<void>;

    mapAsync<TT>(
      this: T[],
      callback: (item: T, index?: number, array?: T[]) => Promise<TT>
    ): Promise<TT[]>;
    mapAsyncConcurrent<TT>(
      this: T[],
      callback: (item: T, index?: number, array?: T[]) => Promise<TT>,
      threadCount?: number,
      continueOnError?: boolean
    ): Promise<TT[]>;

    groupBy(this: T[], callback: (item: T) => string): { [key: string]: T[] };
    groupBy(this: T[], prop: string): { [key: string]: T[] };

    min(this: T[], callback: (item: T) => number): number;
    max(this: T[], callback: (item: T) => number): number;
    sum(this: T[], callback: (item: T) => number): number;
  }
}

if (!Array.prototype.groupBy) {
  Array.prototype.groupBy = extensions.groupBy;
}

if (!Array.prototype.min) {
  Array.prototype.min = extensions.min;
}

if (!Array.prototype.max) {
  Array.prototype.max = extensions.max;
}

if (!Array.prototype.sum) {
  Array.prototype.sum = extensions.sum;
}

if (!Array.prototype.forEachAsync) {
  Array.prototype.forEachAsync = extensions.forEachAsync;
}

if (!Array.prototype.mapAsync) {
  Array.prototype.mapAsync = extensions.mapAsync;
}

if (!Array.prototype.forEachAsyncConcurrent) {
  Array.prototype.forEachAsyncConcurrent = extensions.forEachConcurrent;
}

if (!Array.prototype.mapAsyncConcurrent) {
  Array.prototype.mapAsyncConcurrent = extensions.mapConcurrent;
}
