export function min<T>(this: T[], callback: (item: T) => number): number {
  return Math.min(...this.map(callback).filter((v) => !isNaN(v)));
}
