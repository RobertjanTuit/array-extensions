import { PromiseState } from "./PromiseState";

export interface PromisedItem<T, TT> {
  state: PromiseState;
  index: number;
  result: TT;
  item: T;
}
