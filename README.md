# array-extensions

A set of extensions to the array object to make dealing with them easier, neither unique or new, and with lots of inspiration from other languages, stackoverflow and other github projects :)

Includes TypeScript definition files.

## Usage: 
(Also see tests for more usage patterns)

```javascript
import "@_rj_/array-extensions";

// async/await
await [1,2,3].forEachAsync(async (item) => {
    // do something await/async with {item}
})

// then/cath/finally
[4,5,6].forEachAsync(async (item) => {
    // do something async with {item}
}).then(() => {
    // execute something when done 
})
```
## Available functions
```typescript
// proper sequential forEach on async functions
Array<T>.forEachAsync(async callback): Promise<void>
```

```typescript
//Concurrent async forEach, with threadCount
Array<T>.forEachAsyncConcurrent(async callback: (item: T) => void, threadCount = 4, continueOnError = true): Promise<void>
```

```typescript
// proper sequential map on async functions
Array<T>.mapAsync<TT>(async callback: (item: T) => TT): Promise<TT>
```

```typescript
// Concurrent async map, with threadCount
Array<T>.mapAsyncConcurrent<TT>(async callback: (item: T) => TT, threadCount = 4, continueOnError = true): Promise<TT>
```

```typescript
// simple reduce groupby, 
Array<T>.groupBy(propName: string)
Array<T>.groupBy(callback: (item: T) => string)
```

```typescript
// Following function should say it all, will add more over time (Only works on number arrays)
Array<T>.max(callback: (item: T): number): number
Array<T>.min(callback: (item: T): number): number
Array<T>.sum(callback: (item: T): number): number
```
