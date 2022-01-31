import { PromisedItem, PromiseState } from "../types/";

export async function concurrentPromise<T, TT>(
  items: T[],
  callback: (item: T, index?: number, array?: T[]) => Promise<TT>,
  threadCount: number = 4,
  continueOnError: boolean = true
) {
  return new Promise<TT[]>(async (resolve, reject) => {
    // TODO: Do this
    var wrappedItems = items.map(
      (item, index) =>
        ({
          state: PromiseState.Initialized,
          item,
          index,
        } as PromisedItem<T, TT>)
    );

    for (let index = 0; index < wrappedItems.length; index++) {
      let doNext: (value?: unknown) => void;
      var waitPromise = new Promise((r) => (doNext = r));

      const wrappedItem = wrappedItems[index];
      const initializedCount = () =>
        wrappedItems.filter((i) => i.state == PromiseState.Initialized).length;
      const pendingCount = () =>
        wrappedItems.filter((i) => i.state == PromiseState.Pending).length;
      const doneCount = () =>
        wrappedItems.filter((i) => i.state >= PromiseState.Fulfilled).length;

      wrappedItem.state = PromiseState.Pending;
      callback(wrappedItem.item, wrappedItem.index, items)
        .then((result) => {
          wrappedItem.result = result;
          wrappedItem.state = PromiseState.Fulfilled;
        })
        .catch(() => {
          wrappedItem.state = PromiseState.Rejected;
          if (continueOnError) {
            reject();
          }
        })
        .finally(() => {
          if (
            (pendingCount() < threadCount && initializedCount() > 0) ||
            doneCount() == wrappedItems.length
          ) {
            doNext();
          }
        });
      if (initializedCount() == 0 || pendingCount() == threadCount) {
        await waitPromise;
      }
    }
    resolve(wrappedItems.map((wi) => wi.result));
  });
}
