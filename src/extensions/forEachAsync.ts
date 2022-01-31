export async function forEachAsync<T>(
  this: T[],
  callback: (item: T, index?: number, array?: T[]) => Promise<void>
): Promise<void> {
  for (let index = 0; index < this.length; index++) {
    await callback(this[index], index, this);
  }
}
