export function sum<T>(this: T[], callback: (item: T) => number) {
  return this.reduce((a, b) => a + callback(b), 0);
}
