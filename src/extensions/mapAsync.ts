export async function mapAsync<T, TT>(
  this: T[],
  callback: (item: T, index?: number, array?: T[]) => Promise<TT>
): Promise<TT[]> {
  const result: TT[] = [];
  for (let index = 0; index < this.length; index++) {
    result.push(await callback(this[index], index, this));
  }
  return result;
}
