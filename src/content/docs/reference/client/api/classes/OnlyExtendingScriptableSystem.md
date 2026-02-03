---
editUrl: false
next: false
prev: false
title: "OnlyExtendingScriptableSystem"
---

```ts
type OnlyExtendingScriptableSystem<T> = { [K in keyof T as T[K] extends typeof gameScriptableSystem ? K : never]: T[K] };
```

Defined in: client-types/out/precomputed/classes.d.ts:56

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
