export function groupBy<T>(this: T[], prop: string);
export function groupBy<T>(this: T[], callback: (item: T) => string);
export function groupBy<T>(
  this: T[],
  callbackOrProp: ((item: T) => string) | string
) {
  return this.reduce(function (groups, item) {
    const val =
      typeof callbackOrProp == "string"
        ? item[callbackOrProp]
        : callbackOrProp(item);
    groups[val] = groups[val] || [];
    groups[val].push(item);
    return groups;
  }, {});
}
