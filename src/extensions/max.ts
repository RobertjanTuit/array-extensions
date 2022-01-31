export function max<T>(this: T[], callback: (item: T) => number): number {
  return Math.max(...this.map(callback).filter((v) => !isNaN(v)));
}
